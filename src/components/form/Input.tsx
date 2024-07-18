import React, {FC} from 'react';
import InputMask from 'react-input-mask';
import {useController, useFormContext} from 'react-hook-form';

import {EFormPrefix, EInputType} from "../../models";

type EditableInputProps = {
    name: string
    label: string
    mask?: string
    type?: EInputType
    prefix: EFormPrefix
    inputClass?: string
}

const MyInput: FC<EditableInputProps> = (props) => {

    const {control} = useFormContext();
    const {field, fieldState: {error}} = useController({...control, name: props.prefix + props.name});

    const inputProps = {
        type: props.type || "text",
        value: field.value || "",
        id: props.prefix + props.name,
        className: "my-input__field",
        autoComplete: "off",
        onChange: e => {
            field.onChange(e.target.value);
        }
    }

    return <div className="my-input">
        {props?.mask
            ? <InputMask mask={props.mask} {...inputProps}/>
            : <input {...inputProps}/>}

        <label htmlFor={props.prefix + props?.name} className="my-input__label">{props?.label}</label>
        <p className="my-input__error">{error?.message}</p>
    </div>
};

export default MyInput;
