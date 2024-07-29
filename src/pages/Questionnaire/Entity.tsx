import {FC} from "react";
import {observer} from "mobx-react-lite";

import {EFormFields, EFormPrefix, positionDirection, taxSystems, typeOwnership} from "../../models";
import {EntityInfoRoute} from "../../models/routes";

import MyInput from "../../components/form/Input";
import WrapperBlock from "../../components/WrapperBlock";
import MySelect from "../../components/form/Select";
import MyRadio from "../../components/form/Radio";
import {BoolOptions} from "../../models/form";
import VisibleElement from "../../components/VisibleElement";
import {EBoolean} from "../../models/schemes/defaultValue";
import {useFormContext} from "react-hook-form";

const Entity: FC = () => {
    const {watch} = useFormContext();

    const prefix = EFormPrefix.ENTITY,
        director = EFormPrefix.DIRECTOR,
        isVisible = watch(prefix + EFormFields.MATCH_LEGAL_ACTUAL) === EBoolean.NO;

    return <WrapperBlock title={EntityInfoRoute.title} id="entity">

        <div className="grid grid__1fr_1fr_2fr">
            <MyInput
                label="ИНН"
                prefix={prefix}
                name={EFormFields.INN}
            />

            <MyInput
                label="КПП"
                prefix={prefix}
                name={EFormFields.KPP}
            />

            <MySelect
                prefix={prefix}
                options={typeOwnership}
                title="Тип собственности"
                name={EFormFields.TYPE_OWNERSHIP}
            />
        </div>

        <div className="grid grid__1fr_1fr_2fr">
            <MyInput
                label="ОГРН"
                prefix={prefix}
                name={EFormFields.OGRN}
            />
            <MyInput
                label="Количество сотрудников"
                prefix={prefix}
                name={EFormFields.COUNT_EMPLOYMENT}
            />

            <MySelect
                prefix={prefix}
                options={taxSystems}
                name={EFormFields.TAX_SYSTEM}
                title="Система налогооблажения"
            />
        </div>

        <div className="grid grid__row">
            <MyRadio
                prefix={prefix}
                options={BoolOptions}
                name={EFormFields.MATCH_LEGAL_ACTUAL}
                label="Адрес ведения бизнеса совпадает с адресом ващей регистрации"
            />
        </div>

        <VisibleElement isVisible={isVisible} className="grid">
            <MyInput
                prefix={prefix}
                label="Адрес регистрации"
                name={EFormFields.LEGAL_ADDRESS}
            />
        </VisibleElement>

        <div className="block__subtitle">
            <h4 className="block__subtitle--label">Данные о директоре</h4>
        </div>

        <div className="grid grid__row">
            <MyInput
                label="Фамилия"
                prefix={director}
                name={EFormFields.LAST_NAME}
            />

            <MyInput
                label="Имя"
                prefix={director}
                name={EFormFields.FIRST_NAME}
            />

            <MyInput
                label="Отчество"
                prefix={director}
                name={EFormFields.SECOND_NAME}
            />
        </div>

        <div className="grid grid__row">
            <MyInput
                label="ИНН"
                prefix={director}
                name={EFormFields.INN}
            />

            <MySelect
                title="Должность"
                prefix={director}
                options={positionDirection}
                name={EFormFields.POSITION}
            />
        </div>

    </WrapperBlock>
}

export default observer(Entity);