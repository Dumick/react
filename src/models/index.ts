import {ITabsOptionItem} from "../components/MyTabs";
import * as routers from "./routes";

export const tabsOptions: ITabsOptionItem[] = [
    {label: "Информация о клиенте", value: "client", checked: false, route: routers.ClientInfoRoute},
    {label: "Информация об организации", value: "entity", checked: false, route: routers.EntityInfoRoute},
    {label: "Информация об имуществе", value: "immovable", checked: false, route: routers.ImmovableInfoRoute},
    {label: "Информация об учредителях", value: "founder", checked: false, route: routers.FounderInfoRoute},
]

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

    CONTACT_PHONE = "CONTACT_PHONE",
    CONTACT_EMAIL = "CONTACT_EMAIL",
    CONTACT_GENDER = "CONTACT_GENDER",
    CONTACT_LAST_NAME = "CONTACT_LAST_NAME",
    CONTACT_FIRST_NAME = "CONTACT_FIRST_NAME",
    CONTACT_SECOND_NAME = "CONTACT_SECOND_NAME",
}