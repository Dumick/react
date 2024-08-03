import * as routers from "./routes";
import {IProgramOption, ISelectOption} from "./types";
import {ITabsOptionItem} from "../components/Steps";
import {LoanParamsRoute} from "./routes";

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
    {no: 1, value: "loan", checked: false, route: routers.LoanParamsRoute},
    {no: 2, value: "client", checked: false, route: routers.ClientInfoRoute},
    {no: 3, value: "entity", checked: false, route: routers.EntityInfoRoute},
    {no: 4, value: "accounts", checked: false, route: routers.AccountRoute},
    // {no: 6, label: "Документы клиента", value: "documents", checked: false, route: routers.DocumentRoute},
];

export const productOptions: IProgramOption[] = [
    {label: "Кредит", value: "my-credit", id: 1},
    {label: "Овердрафт", value: "my-overdraw", id: 1},
    {label: "Кредитная карта", value: "my-credit-card", id: 2},
]

export enum EFormPrefix {
    LOAN = "LOAN",
    CHILD = "CHILD",          // Дети
    CLIENT = "CLIENT",        // Клиент
    SPOUSE = "SPOUSE",        // Супруг
    ENTITY = "ENTITY",        // Организация
    LEASING = 'LEASING',      // Лизинг
    VEHICLE = "VEHICLE",      // Транспортные средства
    CONTACT = "CONTACT",      // Контактное лицо
    DIRECTOR = "DIRECTOR",    // Директор
    FOUNDERS = "FOUNDERS",  // Обеспечение
    IMMOVABLE = "IMMOVABLE",  // Недвижимое имущество
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
    MATCH_SPOUSE_LEGAL = "MATCH_SPOUSE_LEGAL",
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

    YEAR = "YEAR",
    BRAND = "BRAND",
    MODAL = "MODAL",

    SQUARE = "SQUARE",
    OBJECT = "OBJECT",
    DOC_END_DATE = "DOC_END_DATE",
    DOC_BEGIN_DATE = "DOC_BEGIN_DATE",


}