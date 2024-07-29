import {FC, useEffect} from "react";
import {Range} from "react-range";
import {observer} from "mobx-react-lite";
import {useController, useFormContext} from "react-hook-form";
import {EFormFields, EFormPrefix} from "../../models";
import {regSpace} from "../../models/constant";

type TProp = {
    min?: number
    max?: number
    step?: number
    title: string
    name: EFormFields
    prefix: EFormPrefix
}

const MyRange: FC<TProp> = (props) => {

    const {control} = useFormContext();
    const {field, fieldState: {error}} = useController({...control, name: props.prefix + props.name});

    let rangeValue: number[];
    if (field?.value) {
        const value = field?.value > props?.max ? props?.max : field?.value
        rangeValue = field?.value < props.min ? [props?.min] : [value]
    } else if (props?.min) {
        rangeValue = [props?.min];
    } else {
        rangeValue = [0];
    }

    return <div className="my-range">
        <div className="my-range__head">
            <p>{props?.title}</p>
        </div>

        <div className="my-range__row">

            <div className="my-range__wrapper">

                {props?.min && props?.max && <div className="range__head">
                    <p>{props?.min.toLocaleString("ru")}</p>
                    <p>{props?.max.toLocaleString("ru")}</p>
                </div>}

                <div className="range__body">
                    <Range
                        min={props?.min}
                        max={props?.max}
                        step={props?.step}

                        key={props?.name}
                        values={rangeValue}
                        onChange={values => field?.onChange(values)}

                        renderTrack={({props, children}) => (
                            <div {...props} className="my-range__track">
                                {children}
                            </div>
                        )}
                        renderThumb={({props}) => (
                            <div
                                {...props}
                                key={props.key}
                                className="my-range__thumb"
                            />
                        )}
                    />
                </div>
            </div>

            <div className="my-range__input">
                <input type="number"
                       id={props.name}
                       min={props?.min}
                       max={props?.max}
                       step={props?.step}
                       value={field?.value || props?.min}
                       onChange={evt => {
                           const value = +evt.target.value.replace(regSpace, "");
                           field.onChange([value]);
                       }}/>
            </div>
        </div>
    </div>
}

export default observer(MyRange);