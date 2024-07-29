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

export interface IProgramOption extends TOption {
    id: number
}

export type stepContentItem = {
    number: number
    route: IRoute
}