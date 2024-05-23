import {ITabsOptionItem} from "../components/MyTabs";
import * as routers from "./routes";
import {ISelectOption} from "./types";

export enum ERoleCode {
    ADMIN = 'ADMIN',
    CLIENT = 'CLIENT',
    EMPLOYER = 'EMPLOYER'
}

export enum EInputType {
    text = 'text',
    number = 'number',
}

export const roleOptions: Record<ERoleCode, ISelectOption> = {
    [ERoleCode.CLIENT]: {label: 'Клиент', value: ERoleCode.CLIENT},
    [ERoleCode.ADMIN]: {label: 'Администратор', value: ERoleCode.ADMIN},
    [ERoleCode.EMPLOYER]: {label: 'Сотрудник', value: ERoleCode.EMPLOYER}
};

export const usersNameRole: Record<ERoleCode, string> = {
    [ERoleCode.ADMIN]: 'Папков И.В.',
    [ERoleCode.CLIENT]: 'Орешкин А.Е.',
    [ERoleCode.EMPLOYER]: 'Гурьянов А.А.'
};

export const tabsOptions: ITabsOptionItem[] = [
    {label: "Информация о клиенте", value: "client", checked: false, route: routers.ClientInfoRoute},
    {label: "Информация об организации", value: "entity", checked: false, route: routers.EntityInfoRoute},
    {label: "Информация об имуществе", value: "immovable", checked: false, route: routers.ImmovableInfoRoute},
    {label: "Информация об учредителях", value: "founder", checked: false, route: routers.FounderInfoRoute},
];

export const CLIENT = "CLIENT.";

export enum EFormFields {
    CLIENT_EMAIL = "CLIENT_EMAIL",
    CLIENT_PHONE = "CLIENT_PHONE",
    CLIENT_GENDER = "CLIENT_GENDER",
    CLIENT_LAST_NAME = "CLIENT_LAST_NAME",
    CLIENT_FIRST_NAME = "CLIENT_FIRST_NAME",
    CLIENT_SECOND_NAME = "CLIENT_SECOND_NAME",
    CLIENT_REG_ADDRESS = "CLIENT_REG_ADDRESS",
    CLIENT_FAMILY_STATUS = "CLIENT_FAMILY_STATUS",
    CLIENT_MATCH_ADDRESS = "CLIENT_MATCH_ADDRESSES",
    CLIENT_ACTUAL_ADDRESS = "CLIENT_ACTUAL_ADDRESS",

    CLIENT_BIRTH_DATE = "CLIENT_BIRTH_DATE",
    CLIENT_BIRTH_PLACE = "CLIENT_BIRTH_PLACE",
    CLIENT_DOC_NO = "CLIENT_DOC_NO",
    CLIENT_DOC_SERIES = "CLIENT_DOC_SERIES",
    CLIENT_DOC_IIS_CODE = "CLIENT_DOC_IIS_CODE",
    CLIENT_DOC_IIS_NAME = "CLIENT_DOC_IIS_NAME",
    CLIENT_DOC_IIS_DATE = "CLIENT_DOC_IIS_DATE",

    CONTACT_PHONE = "CONTACT_PHONE",
    CONTACT_EMAIL = "CONTACT_EMAIL",
    CONTACT_GENDER = "CONTACT_GENDER",
    CONTACT_LAST_NAME = "CONTACT_LAST_NAME",
    CONTACT_FIRST_NAME = "CONTACT_FIRST_NAME",
    CONTACT_SECOND_NAME = "CONTACT_SECOND_NAME",

    DIRECTOR_EMAIL = "DIRECTOR_EMAIL",
    DIRECTOR_PHONE = "DIRECTOR_PHONE",
    DIRECTOR_GENDER = "DIRECTOR_GENDER",
    DIRECTOR_SECOND_NAME = "DIRECTOR_SECOND_NAME",
    DIRECTOR_LAST_NAME = "DIRECTOR_LAST_NAME",
    DIRECTOR_FIRST_NAME = "DIRECTOR_FIRST_NAME",
    DIRECTOR_INN = "DIRECTOR_INN",
    DIRECTOR_POSITION = "DIRECTOR_POSITION",

    INN = "INN",
    KPP = "KPP",
    NAME = "NAME",
    OGRN = "OGRN",
    OKVED = "OKVED",
}