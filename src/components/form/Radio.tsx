import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {IRadioOption} from "../../models/types";
import {useController, useFormContext} from "react-hook-form";
import {EFormPrefix} from "../../models";

type TProp = {
    name: string
    label: string
    prefix: EFormPrefix
    options: IRadioOption[]
}

const MyRadio: FC<TProp> = (props) => {
    const {control} = useFormContext();
    const {field, fieldState: {error}} = useController({...control, name: props.prefix + props.name});

    return <div className="my-radio">
        <label className="my-radio__name">{props?.label}</label>
        <div className="flex">
            {props?.options.map(option => (
                <div key={option.value} className="my-radio__item">
                    <input
                        type="radio"
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

export default observer(MyRadio);