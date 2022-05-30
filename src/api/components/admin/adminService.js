import bcrypt from 'bcryptjs';
import Admin from '../admin/adminModel.js';
import { default as config } from '../../config/config.js';
import logger from '../../config/logger.js';
import Role from './roleModel.js';

const hashPassword = async (password) => {
	password = await bcrypt.hash(password, 12);
	return password;
};

export const signUpService = async () => {
	try {
		// Create role for superAdmin
		let role = await Role.findOne({ roleName: 'superAdmin' });
		if (!role) {
			role = await Role.create({ roleName: 'superAdmin' });
			logger.info('role created');
		}

		let password = '';
		const admin = await Admin.findOne({ email: config.adminCreds.adminEmail });
		if (admin) return { err_msg: 'admin already exists', statusCode: 201 };
		password = await hashPassword(config.adminCreds.adminPassword);

		const superAdmin = await Admin.create({
			email: config.adminCreds.adminEmail,
			password: password,
			firstName: config.adminCreds.adminFirstName,
			lastName: config.adminCreds.adminLastName,
			name:
				config.adminCreds.adminFirstName +
				' ' +
				config.adminCreds.adminLastName,
			isSuperAdmin: true,
			roleId: role._id,
		});
		if (!superAdmin)
			return {
				err_msg: 'Something went wrong please try again',
				statusCode: 400,
			};
		logger.info('super admin created');
		return {
			_id: superAdmin._id,
			email: superAdmin.email,
			firstName: superAdmin.firstName,
			lastName: superAdmin.lastName,
		};
	} catch (error) {
		throw error;
	}
};

export const forgotPasswordService = async (email) => {
	try {
		logger.info('Inside forgotPassword Service');
		/*
				Function logic
		*/
	} catch (error) {
		throw error;
	}
};

export const getAdminProfileService = async (id) => {
	try {
		/*
				Function logic
		*/
	} catch (error) {
		throw error;
	}
};

export const updateAdminProfileService = async (id, body) => {
	try {
		/*
				Function logic
		*/
	} catch (error) {
		throw error;
	}
};
