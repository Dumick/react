import {makeAutoObservable} from "mobx";

import {ERequestStatus} from "../models/constant";

class FormStore {

    public status: ERequestStatus = ERequestStatus.QUESTIONARY;

    constructor() {
        makeAutoObservable(this);
    }
}

export default new FormStore();