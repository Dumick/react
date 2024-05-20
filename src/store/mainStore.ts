import {makeAutoObservable} from "mobx";
import {ERoleCode} from "../models";

class MainStore {

    role: ERoleCode;

    constructor() {
        makeAutoObservable(this);
        this.role = ERoleCode.ADMIN;
    }

    public setRole = (role: ERoleCode) => this.role = role;

}

export default new MainStore();