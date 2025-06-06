"use strict";
class User {
    _username;
    constructor(username) {
        this.username = username;
    }
    set username(value) {
        if (value.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
        this._username = value;
    }
    get username() {
        return this._username;
    }
}
const user = new User("Martin");
user.username = "Do";
console.log(user.username);
//# sourceMappingURL=10.Accessors.js.map