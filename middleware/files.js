class Auth {
    static token = null;

    static setUserId(tokens) {
        Auth.token = tokens;
    }

    static getUserId() {
        return Auth.token;
    }
}

module.exports = Auth;