import {makeAutoObservable} from "mobx";

class UserStore {
    userId: number = 1;

    constructor() {
        makeAutoObservable(this)
    };

    public setUserId = (userId: number) => this.userId = userId;
}

export default new UserStore();