import express from 'express';
import admin from './admin/adminRoute.js';
import notification from './notification/notificationRoute.js';

const router = express.Router();

router.use('/notification', notification);
router.use('/admin', admin);

export default router;
