import {FC, Fragment} from "react";
import {observer} from "mobx-react-lite";
import {EFormFields, EFormPrefix} from "../../models";
import {useFieldArray, useFormContext} from "react-hook-form";
import WrapperBlock from "../../components/WrapperBlock";
import MyInput from "../../components/form/Input";

const COUNT_IMMOVABLE = 3;

const Immovable: FC = () => {
    const prefix = EFormPrefix.IMMOVABLE + "." as EFormPrefix;

    const {control} = useFormContext();
    const {fields, append, remove} = useFieldArray({control, name: EFormPrefix.IMMOVABLE})

    const addImmovable = () => {
        append({})
    }

    return <article className="block">
        <fieldset className="block-sub">

            {fields.map((field, index) => {
                return <Fragment key={field.id}>
                    <div className="block-sub__title">
                        <h4>Информация о недвижимости {index + 1}</h4>
                    </div>

                    <div className="grid grid__row">
                        <MyInput prefix={prefix} name={EFormFields.OBJECT} label="Тип недвижимости"/>
                        <MyInput prefix={prefix} name={EFormFields.SQUARE} label="Площадь, кв.м."/>
                    </div>

                    <div className="grid grid__row">
                        <MyInput prefix={prefix} name={EFormFields.REG_ADDRESS} label="Адрес"/>
                    </div>
                </Fragment>
            })}
        </fieldset>

        {fields?.length < COUNT_IMMOVABLE &&
            <div onClick={addImmovable}>Добавить новый объект недвижимости</div>
        }
    </article>
}

export default observer(Immovable);