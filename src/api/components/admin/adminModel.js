import mongoose from 'mongoose';
import db from '../../connections/dbConnection.js';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	firstName: String,
	lastName: String,
	userName: String,
	profilePic: String,
	name: String,
	companyName: String,
	password: {
		type: String,
		required: true,
		select: false,
	},
	passwordChangedAt: Date,
	walletAddress: String,
	isSuperAdmin: {
		type: Boolean,
		default: false,
	},
	roleId: { type: mongoose.Schema.ObjectId, ref: 'Role' },
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: { type: Date },
});

const admin = db.model('Admin', userSchema);

export default admin;
