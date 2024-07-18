import {IRoute} from "./routes";

type TOption = {
    label: string
    value: string
}

export interface IRadioOption extends TOption {
    tooltip?: string
}

export interface ISelectOption extends TOption {
    placeholder?: string
}

export type stepContentItem = {
    number: number
    route: IRoute
}