export enum EBoolOption {
    Y = "Y",
    N = "N"
}

export const boolOption = {
    [EBoolOption.Y]: true,
    [EBoolOption.N]: false
}

export interface IToDoItem {
    id: number
    title: string
    userId: number
    completed: boolean
}