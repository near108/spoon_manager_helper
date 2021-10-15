console.debug("loaded authController");

const SECRET_ID = 'id';
const SECRET_KEY = 'key';

class AuthController {
    constructor() {
        this.authContext = {
            secretId: '',
            secretKey: ''
        }
    }

    setSecretId(value) {
        this.authContext.secretId = value;
    }

    setSecretKey(value) {
        this.authContext.secretKey = value;
    }

    getAuthContext() {
        return this.authContext;
    }

    authenticate() {
        if (this.authContext.secretId == SECRET_ID && this.authContext.secretKey == SECRET_KEY) {
            return true;
        }
        return false;
    }
}