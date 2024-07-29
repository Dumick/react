import {FC} from "react";
import Select from 'react-select'
import {observer} from "mobx-react-lite";
import {EFormFields, EFormPrefix} from "../../models";
import {useController, useFormContext} from "react-hook-form";

export interface ISelectOption {
    value: string;
    label: string;
}

type TProp = {
    title: string
    name: EFormFields
    isMulti?: boolean
    prefix: EFormPrefix
    options: ISelectOption[]
    placeholder?: string
}

const MySelect: FC<TProp> = (props) => {
    const {control} = useFormContext();
    const {field, fieldState: {error}} = useController({...control, name: props.prefix + props.name});

    const value = props.options.find(option => option.value === field.value) || "";

    return <div className="select__wrap">
        <label htmlFor={props.prefix + props.name}>{props.title}</label>
        <Select
            className="my-select"
            classNamePrefix="my-select"
            value={value}
            id={props.prefix + props.name}

            isMulti={props?.isMulti}
            placeholder={props?.placeholder || ""}

            options={props.options}
            onChange={(option: ISelectOption) => field.onChange(option?.value)}
        />
    </div>
}

export default observer(MySelect);