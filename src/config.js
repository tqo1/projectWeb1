global.PROJECT_NAME = 'REST API';
global.PROJECT_URL = 'http://localhost:3000';
global.PROJECT_VERSION = '0.0.1';
global.SALT_KEY = 'e8ccfba6-f087-4697-a567-2ee41e6b6697'; //important

module.exports = {
    MODE: 'development', // production or development
    CONNECTION_STRING: ' mongodb://127.0.0.1:27017/test', //mongodb connection string (required)
    SENDGRID_API_KEY: '', //sendgrid api key (optional)
    SENDGRID_MAILER: '' // who is sending the emails (optional)
};