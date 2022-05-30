import mongoose from 'mongoose';
import db from '../../connections/dbConnection.js';

const roleSchema = new mongoose.Schema({
	roleName: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
	},
});

const Role = db.model('Role', roleSchema);

export default Role;
