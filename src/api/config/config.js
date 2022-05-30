import dotenv from 'dotenv';

dotenv.config();
export default {
	nodeEnv: process.env.NODE_ENV,
	port: process.env.PORT,
	jwtSecret: process.env.JWT_SECRET,
	jetExpiresIn: process.env.JWT_EXPIRES_IN,
	apiVersionUrl: '/api/v1',
	db: {
		str:
			process.env.NODE_ENV === 'production'
				? process.env.CLOUD_MONGO_STRING
				: process.env.CLOUD_MONGO_STRING,
		options: {
			auto_reconnect: true,
			poolSize: 200,
			useNewUrlParser: true,
			readPreference: 'primaryPreferred',
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		},
	},
	adminCreds: {
		adminEmail: process.env.ADMIN_EMAIL,
		adminPassword: process.env.ADMIN_PASSWORD,
		adminFirstName: process.env.ADMIN_FIRST_NAME,
		adminLastName: process.env.ADMIN_LAST_NAME,
	},
	// firebase: {
	// 	type: process.env.FIREBASE_TYPE,
	// 	project_id: FIREBASE_PROJECT_ID,
	// 	private_key_id: FIREBASE_PRIVATE_KEY_ID,
	// 	private_key: FIREBASE_PRIVATE_KEY,
	// 	client_email: FIREBASE_CLIENT_EMAIL,
	// 	client_id: FIREBASE_CLIENT_ID,
	// 	auth_uri: FIREBASE_AUTH_URI,
	// 	token_uri: FIREBASE_TOKEN_URI,
	// 	auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_CERT_URI,
	// 	client_x509_cert_url: FIREBASE_CLIENT_CERT_URI,
	// },
};
