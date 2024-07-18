import React, {FC} from "react";
import {IRadioOption} from "../../models/types";
import {useController, useFormContext} from "react-hook-form";

type TProp = {
    name: string
    label: string
    options: IRadioOption[]
}

const CheckBox: FC<TProp> = (props) => {
    const {control} = useFormContext();
    const {field, fieldState: {error}} = useController({...control, name: props.name});

    return <div className="my-radio">
        <label className="my-radio__name">{props?.label}</label>
        <div className="flex">
            {props?.options.map(option => (
                <div key={option.value} className="my-radio__item">
                    <input
                        type="checkbox"
                        className="my-radio__item--field"
                        id={props.name + '-' + option.value}
                        value={option.value}
                        checked={field.value === option.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                    />
                    <label htmlFor={props.name + '-' + option.value} className="my-radio__item--label">{option.label}</label>
                </div>
            ))}
        </div>
        <p className="my-radio__error">{error?.message}</p>
    </div>
}

export default CheckBox;