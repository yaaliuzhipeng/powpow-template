import { makeAutoObservable } from 'mobx';

class UserStore {

    /**
     * Observable Data
     */
    user: any = {};

    /**
     * Computed Data
     */
    get isLogined() { return this.user.id !== null; }

    constructor() {
        makeAutoObservable(this);
    }
    updateMe(u: any) {
        if (u != null) {
            let _user = { ...this.user };
            Object.assign(_user, u);
            this.user = _user;
        } else {
            this.user = {};
        }
    }
    login(u: any) {
        this.updateMe(u)
    }
    logout() {
        this.updateMe(null);
    }
}

const userStore = new UserStore();

export default userStore;
