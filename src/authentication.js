class Authentication {
    constructor() {
        this.authenticated = false;
    }

    completeForm(callback) {
        this.authenticated = true;
        callback();
    }

    incompleteForm(callback) {
        this.authenticated = false;
        callback();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Authentication()