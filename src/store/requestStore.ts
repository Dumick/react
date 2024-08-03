import {makeAutoObservable} from "mobx";

export enum ERequestState {
    LOAN = 1,
    CLIENT = 2,
    ENTITY = 3,
    ACCOUNTS = 4
}

class RequestStore {

    state: ERequestState;

    constructor() {
        makeAutoObservable(this);
        this.state = ERequestState.ENTITY;
    }
}

export default new RequestStore();