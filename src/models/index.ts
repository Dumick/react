import * as routers from "./routes";
import {IProgramOption, ISelectOption} from "./types";
import {ITabsOptionItem} from "../components/Steps";

export enum ERoleCode {
    ADMIN = 'ADMIN',
    CLIENT = 'CLIENT',
    EMPLOYER = 'EMPLOYER'
}

export enum EInputType {
    date = 'date',
    text = 'text',
    number = 'number',
}

export const roleOptions: Record<ERoleCode, ISelectOption> = {
    [ERoleCode.CLIENT]: {label: 'Клиент', value: ERoleCode.CLIENT},
    [ERoleCode.ADMIN]: {label: 'Администратор', value: ERoleCode.ADMIN},
    [ERoleCode.EMPLOYER]: {label: 'Сотрудник', value: ERoleCode.EMPLOYER}
};

export const typeOwnership: ISelectOption[] = [
    {label: "Аренда", value: "rent"},
    {label: "Частная собственность", value: "private"},
    {label: "Государственная собственность", value: "state"},
    {label: "Муниципальная собственность", value: "municipal"},
    {label: "Смешанная собственность", value: "mixed"},
]

export const positionDirection: ISelectOption[] = [
    {label: "Директор", value: "DIR"},
    {label: "Генеральный директор", value: "DIR_MAIN"},
]

export const taxSystems: ISelectOption[] = [
    {label: "Основная система налогообложения", value: "OSN"},
    {label: "Урощенная система налогообложения", value: "USN"},
    {label: "Автоматизированная упрощенная система налогообложения", value: "AUSN"},
    {label: "Единый сельскохозяйственный налог", value: "ESN"},
    {label: "Патентная система налогообложения", value: "PSN"},
];

export const usersNameRole: Record<ERoleCode, string> = {
    [ERoleCode.ADMIN]: 'Папков И.В.',
    [ERoleCode.CLIENT]: 'Орешкин А.Е.',
    [ERoleCode.EMPLOYER]: 'Гурьянов А.А.'
};

export const tabsOptions: ITabsOptionItem[] = [
    {no: 1, label: "Информация о клиенте", value: "client", checked: false, route: routers.ClientInfoRoute},
    {no: 1, label: "Информация о кредите", value: "client", checked: false, route: routers.ClientInfoRoute},
    {no: 2, label: "Информация об организации", value: "entity", checked: false, route: routers.EntityInfoRoute},
    {no: 3, label: "Информация об учредителях", value: "founder", checked: false, route: routers.FounderInfoRoute},
    {no: 4, label: "Информация об имуществе", value: "immovable", checked: false, route: routers.ImmovableInfoRoute},
    {no: 5, label: "Информация о счетах", value: "account", checked: false, route: routers.AccountRoute},
    {no: 6, label: "Документы клиента", value: "documents", checked: false, route: routers.DocumentRoute},
];

export const productOptions: IProgramOption[] = [
    {label: "Кредит", value: "my-credit", id: 1},
    {label: "Овердрафт", value: "my-overdraw", id: 1},
    {label: "Кредитная карта", value: "my-credit-card", id: 2},
]

export enum EFormPrefix {
    LOAN = "LOAN.",
    CHILD = "CHILD.",          // Дети
    CLIENT = "CLIENT.",        // Клиент
    SPOUSE = "SPOUSE.",        // Супруг
    ENTITY = "ENTITY.",        // Организация
    CREDIT = "CREDIT.",        // Параметры кредита
    LEASING = 'LEASING.',      // Лизинг
    CONTACT = "CONTACT.",      // Контактное лицо
    DIRECTOR = "DIRECTOR.",    // Директор
    PROVISION = "PROVISION.",  // Обеспечение
}

export enum EFormFields {
    EMAIL = "EMAIL",
    PHONE = "PHONE",
    GENDER = "GENDER",
    POSITION = "POSITION",
    LAST_NAME = "LAST_NAME",
    FIRST_NAME = "FIRST_NAME",
    SECOND_NAME = "SECOND_NAME",
    REG_ADDRESS = "REG_ADDRESS",
    FAMILY_STATUS = "FAMILY_STATUS",
    MATCH_ADDRESS = "MATCH_ADDRESSES",
    ACTUAL_ADDRESS = "ACTUAL_ADDRESS",

    RESIDENT = "RESIDENT",
    PLACE_WORK = "PLACE_WORK",
    CHILD_COUNT = "CHILD_COUNT",

    BIRTH_DATE = "BIRTH_DATE",
    BIRTH_PLACE = "BIRTH_PLACE",
    DOC_NO = "DOC_NO",
    DOC_SERIES = "DOC_SERIES",
    DOC_IIS_CODE = "DOC_IIS_CODE",
    DOC_IIS_NAME = "DOC_IIS_NAME",
    DOC_IIS_DATE = "DOC_IIS_DATE",

    INN = "INN",
    KPP = "KPP",
    OGRN = "OGRN",
    TAX_SYSTEM = "TAX_SYSTEM",
    LEGAL_ADDRESS = "LEGAL_ADDRESS",
    TYPE_OWNERSHIP = "TYPE_OWNERSHIP",
    COUNT_EMPLOYMENT = "COUNT_EMPLOYMENT",
    MATCH_LEGAL_ACTUAL = "MATCH_LEGAL_ACTUAL",

    NAME = "NAME",
    ORDER = "ORDER",
    AMOUNT = "AMOUNT",
    PRODUCT = "PRODUCT",
    PURPOSE = "PURPOSE",
    GUARANTY = "GUARANTY",
    DOCUMENT = "DOCUMENT",
    END_DATE = "END_DATE",
    TERMINATE = "TERMINATE",
    AVAILABILITY = "AVAILABILITY",
    PROLONGATION = "PROLONGATION",
    SIGNATURE_TYPE = "SIGNATURE_TYPE",

    OBJECT = "OBJECT",
    DOC_END_DATE = "DOC_END_DATE",
    DOC_BEGIN_DATE = "DOC_BEGIN_DATE",


}