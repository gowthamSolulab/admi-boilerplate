import {
	getAdminProfileService,
	updateAdminProfileService,
	forgotPasswordService,
} from './adminService.js';
import { handleResponse, handleError } from '../../helpers/responseHandler.js';
import logger from '../../config/logger.js';

export const forgotPasswordController = async (req, res) => {
	try {
		logger.info('Inside forgotPassword Controller');
		const data = await forgotPasswordService(req.body.email);
		if (data.err_msg)
			return handleError({
				res,
				statusCode: data.statusCode,
				err_msg: data.err_msg,
			});
		return handleResponse({
			res,
			statusCode: 200,
			msg: 'Email sent successfully',
			data: data.email,
		});
	} catch (error) {
		logger.info(error.message);
		return handleError({ res, error });
	}
};

export const getAdminProfileController = async (req, res) => {
	logger.info('Inside getUserProfile Controller');
	try {
		const data = await getAdminProfileService(res.locals.admin._id); // Admin should be logged in to use this service
		if (!data)
			return handleError({
				res,
				statusCode: 201,
				err_msg: `User doesn't exist`,
			});
		return handleResponse({
			res,
			statusCode: 200,
			msg: 'Profile fetched successfully',
			data,
		});
	} catch (err) {
		logger.error(err.message);
	}
};

export const updateAdminProfileController = async (req, res) => {
	logger.info('Inside updateUserProfile Controller');
	try {
		const data = await updateAdminProfileService(
			res.locals.admin._id,
			req.body
		); // Admin should be logged in to use this service
		if (data.err_msg)
			return handleError({
				res,
				statusCode: data.statusCode,
				err_msg: data.err_msg,
			});
		return handleResponse({
			res,
			statusCode: 200,
			msg: 'Profile updated successfully',
			data,
		});
	} catch (err) {
		logger.error(err.message);
	}
};
