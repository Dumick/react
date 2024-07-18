import {IRadioOption} from "./types";

export enum YesNo {
    NO = 'N',
    YES = 'Y',
}

export const GenderOptions: IRadioOption[] = [
    { value: 'male', label: 'Мужской'},
    { value: 'female', label: 'Женский'},
];

export const BoolOptions: IRadioOption[] = [
    {value: YesNo.YES, label: 'Да'},
    {value: YesNo.NO, label: 'Нет'},
]