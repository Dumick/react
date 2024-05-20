export type TDefaultValue = {
    client: TClientData
    entity?: TEntityData
    account?: TAccountData[]
    founders?: TFoundersData[]
    directory?: TDirectoryData
    immovable?: TImmovableData[]
    contact_client?: TClientContactData
}

export enum EBoolean {
    NO = 'N',
    YES = 'Y',
}

export enum EGender {
    MALE = 'M',
    FEMALE = 'F',
}

interface TClientData extends TDefaultClientData {
    reg_address: string
    family_status: EBoolean | ''
    match_address: EBoolean | ''
    actual_address: string

    doc_no: number | null
    doc_series: number | null
    birth_date: string
    birth_place: string
    doc_iis_date: string
    doc_iis_name: string
    doc_iis_code: string
}

type TDefaultClientData = {
    phone: string
    email: string
    gender: EGender | ''
    last_name: string
    first_name: string
    second_name: string
}

interface TFoundersData extends TDefaultClientData {
    no: number
    inn: number
    percent: number
    is_guaranty: EBoolean

    reg_address: string
    match_address: EBoolean
    actual_address: string
}

type TDirectoryData = TDefaultClientData;
type TClientContactData = TDefaultClientData;

type TEntityData = {
    KPP: string
    INN: string
    OGRN: string
    OKVED: string
}

type TAccountData = {
    no: number
    bic: number
    bank: string
}

type TImmovableData = {
    no: number
    type: string
    square: number
    address: string
}

const initialValue: TDefaultValue = {
    client: {
        email: '',
        phone: '',
        gender: '',
        last_name: '',
        first_name: '',
        second_name: '',
        family_status: '',
        birth_date: '',
        birth_place: '',
        doc_no: null,
        doc_series: null,
        doc_iis_code: '',
        doc_iis_name: '',
        doc_iis_date: '',
        reg_address: '',
        match_address: '',
        actual_address: '',
    },

}