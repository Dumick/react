import {EFormFields} from "./index";

type TFormFields = TFieldText | IFieldEmail | IFieldNumber;

type TFieldText = {
    label: string
    name: EFormFields
    required: boolean
}

interface IFieldEmail extends TFieldText {

}

interface IFieldNumber extends TFieldText {

}

export const FormValues: Record<EFormFields, TFormFields> = {
    [EFormFields.CLIENT_LAST_NAME]: {
        required: true,
        label: "Фамилию",
        name: EFormFields.CLIENT_LAST_NAME,
    },
    [EFormFields.CLIENT_FIRST_NAME]: {
        required: true,
        label: "Имя",
        name: EFormFields.CLIENT_FIRST_NAME,
    },
    [EFormFields.CLIENT_SECOND_NAME]: {
        required: false,
        label: "Отчество",
        name: EFormFields.CLIENT_SECOND_NAME,
    },
    [EFormFields.CLIENT_GENDER]: {
        label: "Пол",
        required: true,
        name: EFormFields.CLIENT_GENDER,
    },
    [EFormFields.CLIENT_FAMILY_STATUS]: {
        required: true,
        name: EFormFields.CLIENT_FAMILY_STATUS,
        label: "Состоите ли вы в официальном браке?"
    },
    [EFormFields.CLIENT_EMAIL]: {
        required: true,
        label: "Электронная почта",
        name: EFormFields.CLIENT_EMAIL
    },
    [EFormFields.CLIENT_PHONE]: {
        required: true,
        label: "Номер телефона",
        name: EFormFields.CLIENT_PHONE,
    },
    [EFormFields.CLIENT_REG_ADDRESS]: {
        required: true,
        label: "Адрес регистрации",
        name: EFormFields.CLIENT_REG_ADDRESS,
    },
    [EFormFields.CLIENT_ACTUAL_ADDRESS]: {
        required: true,
        label: "Адрес фактического проживания",
        name: EFormFields.CLIENT_ACTUAL_ADDRESS,
    },
    [EFormFields.CLIENT_MATCH_ADDRESS]: {
        required: true,
        name: EFormFields.CLIENT_MATCH_ADDRESS,
        label: "Совпадает ли адрес регистрации с фактическим адресом проживания?"
    },

    [EFormFields.CONTACT_PHONE]: {
        required: true,
        label: "Номер телефона",
        name: EFormFields.CONTACT_PHONE,
    },
    [EFormFields.CONTACT_EMAIL]: {
        required: true,
        label: "Электронная почта",
        name: EFormFields.CONTACT_EMAIL,
    },
    [EFormFields.CONTACT_GENDER]: {
        label: "Пол",
        required: true,
        name: EFormFields.CONTACT_GENDER,
    },
    [EFormFields.CONTACT_LAST_NAME]: {
        required: true,
        label: "Фамилия",
        name: EFormFields.CONTACT_LAST_NAME,
    },
    [EFormFields.CONTACT_FIRST_NAME]: {
        label: "Имя",
        required: true,
        name: EFormFields.CONTACT_FIRST_NAME,
    },
    [EFormFields.CONTACT_SECOND_NAME]: {
        required: false,
        label: "Отчестов",
        name: EFormFields.CONTACT_SECOND_NAME
    },

}
