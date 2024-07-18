import {makeAutoObservable} from "mobx";
import {useFormContext} from "react-hook-form";

import {EFormFields, EFormPrefix} from "../models";
import {TDefaultValue, initialValue} from "../models/schemes/defaultValue";

class FormStore {

    public dataForm: TDefaultValue = initialValue;
    public preSaveForm: Record<string, string> = null;

    constructor() {
        makeAutoObservable(this);
    }

    public setDataForm = (data: any): void => {
        const client = data[EFormPrefix.CLIENT];

        console.log(data);

        this.dataForm.client ={
            phone: client?.[EFormFields.PHONE],
            gender: client?.[EFormFields.GENDER],
            email: client?.[EFormFields.EMAIL],
            first_name: client?.[EFormFields.FIRST_NAME],
            last_name: client?.[EFormFields.LAST_NAME],
            second_name: client?.[EFormFields.SECOND_NAME],
            doc_series: client?.[EFormFields.DOC_SERIES],
            doc_no: client?.[EFormFields.DOC_NO],
            doc_iis_date: client?.[EFormFields.DOC_IIS_DATE],
            doc_iis_code: client?.[EFormFields.DOC_IIS_CODE],
            doc_iis_name: client?.[EFormFields.DOC_IIS_NAME],
            birth_date: client?.[EFormFields.BIRTH_DATE],
            birth_place: client?.[EFormFields.BIRTH_PLACE],
            family_status: client?.[EFormFields.FAMILY_STATUS],

            reg_address: client?.[EFormFields.REG_ADDRESS],
            match_address: client?.[EFormFields.MATCH_ADDRESS],
            actual_address: client?.[EFormFields.ACTUAL_ADDRESS],
        }
    }

    public setFields = ({prefix: formPrefix, name: EFormFields, value: any}): void =>  {
        const {control} = useFormContext();

    }
}

export default new FormStore();