import {makeAutoObservable} from "mobx";

class FormStore {


    constructor() {
        makeAutoObservable(this);
    }
}

export default new FormStore();