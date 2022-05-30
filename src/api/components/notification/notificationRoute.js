import express from 'express';
import {
	getNotificationsController,
	updateNotificationsController,
} from './notificationController.js';

/* 

Please define isLoggedIn function to use notification services

*/

// import { isLoggedIn } from ''
const router = express.Router();

// router.get('/getNotifications', isLoggedIn, getNotificationsController);
// router.get('/updateNotifications', isLoggedIn, updateNotificationsController);

export default router;
