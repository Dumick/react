import {FC, Fragment} from "react";
import {observer} from "mobx-react-lite";

import WrapperBlock from "../../components/WrapperBlock";
import {useFieldArray, useFormContext} from "react-hook-form";
import {EFormFields, EFormPrefix} from "../../models";
import MyInput from "../../components/form/Input";

const COUNT_CHILD = 4;

const Children: FC = () => {
    const prefix = EFormPrefix.CHILD + "." as EFormPrefix;

    const {control} = useFormContext();
    const {fields, append, remove} = useFieldArray({control, name: EFormPrefix.CHILD})

    const addChild = () => {
        append({
            [EFormFields.LAST_NAME]: "",
            [EFormFields.BIRTH_DATE]: "",
            [EFormFields.FIRST_NAME]: "",
            [EFormFields.SECOND_NAME]: "",
        })
    }

    return <WrapperBlock id="child">
        <div className="block-sub">

            {fields.map((field, index) => {
                return <Fragment key={field.id}>
                    <div className="block-sub__title">
                        <h4>Несовершеннолетний ребенок {index + 1}</h4>
                    </div>

                    <div className="grid grid__row">
                        <MyInput prefix={prefix} name={EFormFields.LAST_NAME} label="Фамилия"/>
                        <MyInput prefix={prefix} name={EFormFields.FIRST_NAME} label="Имя"/>
                        <MyInput prefix={prefix} name={EFormFields.SECOND_NAME} label="Отчество"/>
                        <MyInput prefix={prefix} name={EFormFields.BIRTH_DATE} label="День рождения"/>
                    </div>
                </Fragment>
            })}
        </div>
        {fields?.length < COUNT_CHILD &&
            <div onClick={addChild}>Добавить несововершеннолетнего ребенка</div>
        }
    </WrapperBlock>
}

export default observer(Children);