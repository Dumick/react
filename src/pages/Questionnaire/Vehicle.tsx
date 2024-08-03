import {FC, Fragment} from "react";
import {observer} from "mobx-react-lite";
import {EFormFields, EFormPrefix} from "../../models";
import {useFieldArray, useFormContext} from "react-hook-form";
import MyInput from "../../components/form/Input";

const COUNT_VEHICLE = 3;

const Vehicle: FC = () => {
    const prefix = EFormPrefix.VEHICLE + "." as EFormPrefix;

    const {control} = useFormContext();
    const {fields, append, remove} = useFieldArray({control, name: EFormPrefix.VEHICLE})

    const addVehicle = () => {
        append({})
    }

    return <article className="block">
        <fieldset className="block-sub">

            {fields.map((field, index) => {
                return <Fragment key={field.id}>
                    <div className="block-sub__title">
                        <h4>Информация о транспортном средстве {index + 1}</h4>
                    </div>

                    <div className="grid grid__row">
                        <MyInput prefix={prefix} name={EFormFields.BRAND} label="Брэнд"/>
                        <MyInput prefix={prefix} name={EFormFields.MODAL} label="Модэль"/>
                        <MyInput prefix={prefix} name={EFormFields.YEAR} label="Год выпуска"/>
                    </div>
                </Fragment>
            })}
        </fieldset>

        {fields?.length < COUNT_VEHICLE &&
            <div onClick={addVehicle}>Добавить транспортное средство</div>
        }
    </article>
}

export default observer(Vehicle);