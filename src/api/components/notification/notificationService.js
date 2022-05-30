import { initializeApp } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import admin from 'firebase-admin';
// import config from '../../config/config.js';
import Notification from './notificationModel.js';

/*
To Initialize firebase Please define firebase variables in .env and uncomment below code and firebase variables in config.js

*/

// Initialize firebase
// initializeApp({
// 	credential: admin.credential.cert({
// 		type: config.firebase.type,
// 		project_id: config.firebase.project_id,
// 		private_key_id: config.firebase.private_key_id,
// 		private_key: config.firebase.private_key,
// 		client_email: config.firebase.client_email,
// 		client_id: config.firebase.client_id,
// 		auth_uri: config.firebase.auth_uri,
// 		token_uri: config.firebase.token_uri,
// 		auth_provider_x509_cert_url: config.firebase.auth_provider_x509_cert_url,
// 		client_x509_cert_url: config.firebase.client_x509_cert_url,
// 	}),
// });

export const getnotificationsService = async (id) => {
	const data = await Notification.find({ userId: id }, 'title body -_id');
	return data;
};

export const pushNotificationsService = async (data) => {
	const notificationData = {
		title: data.title,
		body: data.body,
	};

	await Notification.create({
		...notificationData,
		userId: data.userId,
	});

	const message = {
		notification: notificationData,
		token: data.token,
	};
	await getMessaging().send(message);
	return;
};

export const updateNotificationsService = async (userId, queryString) => {
	const { markAll, id } = queryString;
	let data;
	if (markAll)
		data = await Notification.updateMany(
			{ userId: userId, isRead: false },
			{ $set: { isRead: true } }
		);
	if (!markAll)
		data = await Notification.updateOne({ _id: id }, { isRead: true });
	if (!data)
		return {
			err_msg: 'Something went wrong please try again',
			statusCode: 400,
		};
	return data;
};
