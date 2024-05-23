import {makeAutoObservable} from "mobx";
import {TDefaultValue, initialValue} from "../models/schemes/defaultValue";

class FormStore {

    public dataForm: TDefaultValue = initialValue;

    constructor() {
        makeAutoObservable(this);
    }
}

export default new FormStore();