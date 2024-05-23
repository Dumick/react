import React, {FC} from 'react';
import InputMask from 'react-input-mask';
import {Control, Controller} from 'react-hook-form';
import {EFormFields, EInputType} from "../../models";
import {TDefaultValue} from "../../models/schemes/defaultValue";

type EditableInputProps = {
    name: string
    label: string
    mask?: string
    type?: EInputType
    inputClass?: string
    control: Control<TDefaultValue>
}

const MyInput: FC<EditableInputProps> = (props) => {

    return <label className="my-input" htmlFor={props?.name}>
        <span className="my-input__label">{props?.label}</span>

        <Controller
            name={props?.name}
            control={props?.control}
            render={({field, fieldState: {error}}) =>
                <>
                    {props?.mask?.length > 0
                        ? <InputMask mask={props?.mask} {...field}>
                            {inputProps => <input {...inputProps} />}
                        </InputMask>
                        : <input className="my-input__field" {...field}/>}
                    <span className="my-input__error">{error?.message}</span>
                </>
            }
        />

    </label>
};

export default MyInput;
