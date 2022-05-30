import express from 'express';
import {
	forgotPasswordController,
	getAdminProfileController,
	updateAdminProfileController,
} from './adminController.js';

const router = express.Router();

router.get('/forgotPassword', forgotPasswordController);
router.get('/getProfile', getAdminProfileController);
router.post('./updateProfile', updateAdminProfileController);

export default router;
