export class LoginAttempt {
    constructor(username, time, success) {
        if (username == "" || typeof username != "string" || username == undefined) {
            throw new Error("Nem megfelelő a felhasználónév");
        };
        if (time > new Date() || !(time instanceof Date)) {
            throw new Error("Nem megfelelő az idő");
        };
        this.username = username;
        this.time = time;
        this.success = success;
    };
    toString() {
        return `${this.username}, ${this,time}, ${this.success}`;
    };
};