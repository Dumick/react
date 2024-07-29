import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useFormContext} from "react-hook-form";

import MyInput from "../../components/form/Input";
import MyRadio from "../../components/form/Radio";
import WrapperBlock from "../../components/WrapperBlock";

import {ClientInfoRoute} from "../../models/routes";
import {EFormFields, EFormPrefix} from "../../models";
import {EBoolean} from "../../models/schemes/defaultValue";
import {BoolOptions, GenderOptions} from "../../models/form";
import VisibleElement from "../../components/VisibleElement";

const Client: FC = () => {
    const {watch} = useFormContext();

    const prefix = EFormPrefix.CLIENT,
        prefix_child = EFormPrefix.CHILD;

    const isVisible = watch(prefix + EFormFields.MATCH_ADDRESS) === EBoolean.NO;

    return <WrapperBlock title={ClientInfoRoute.title} id="client">

        <div className="block-sub">

            <div className="block-sub__title">
                <h4>Основная информация</h4>
            </div>

            <div className="grid grid__row">
                <MyInput
                    label="Фамилия"
                    prefix={prefix}
                    name={EFormFields.LAST_NAME}
                />

                <MyInput
                    label="Имя"
                    prefix={prefix}
                    name={EFormFields.FIRST_NAME}
                />

                <MyInput
                    label="Отчество"
                    prefix={prefix}
                    name={EFormFields.SECOND_NAME}
                />
            </div>

            <div className="grid grid__row">
                <MyInput
                    prefix={prefix}
                    label="Номер телефона"
                    mask="+7-(999)-999-99-99"
                    name={EFormFields.PHONE}
                />

                <MyInput
                    prefix={prefix}
                    label="Электронная почта"
                    name={EFormFields.EMAIL}
                />


            </div>

            <div className="grid grid__row">
                <MyRadio
                    label="Пол"
                    prefix={prefix}
                    options={GenderOptions}
                    name={EFormFields.GENDER}
                />

                <MyRadio
                    prefix={prefix}
                    options={BoolOptions}
                    label="Вы состоите в официальном браке?"
                    name={EFormFields.FAMILY_STATUS}
                />

                <MyRadio
                    prefix={prefix}
                    options={BoolOptions}
                    name={EFormFields.RESIDENT}
                    label="Вы являетесь гражданином РФ?"
                />
            </div>

        </div>


        <div className="block-sub">

            <div className="block-sub__title">
                <h4>Паспортные данные</h4>
            </div>

            <div className="grid grid__row">
                <MyInput
                    mask="99 99"
                    prefix={prefix}
                    label="Серия паспорта"
                    name={EFormFields.DOC_SERIES}
                />

                <MyInput
                    mask="999 999"
                    prefix={prefix}
                    label="Номер паспорта"
                    name={EFormFields.DOC_NO}
                />

                <MyInput
                    prefix={prefix}
                    mask="99.99.9999"
                    label="Дата выдачи"
                    name={EFormFields.DOC_IIS_DATE}
                />
            </div>

            <div className="grid grid__1fr_2fr">
                <MyInput
                    mask="999-999"
                    prefix={prefix}
                    label="Код подразделения"
                    name={EFormFields.DOC_IIS_CODE}
                />

                <MyInput
                    prefix={prefix}
                    label="Кем выдано"
                    name={EFormFields.DOC_IIS_NAME}
                />
            </div>

            <div className="grid grid__1fr_2fr">
                <MyInput
                    prefix={prefix}
                    mask="99.99.9999"
                    label="Дата рождения"
                    name={EFormFields.BIRTH_DATE}
                />

                <MyInput
                    prefix={prefix}
                    label="Место рождения"
                    name={EFormFields.BIRTH_PLACE}
                />
            </div>

        </div>

        <div className="block-sub">

            <div className="block-sub__title">
                <h4>Адресса</h4>
            </div>

            <div className="grid">
                <MyInput
                    prefix={prefix}
                    label="Адрес регистрации"
                    name={EFormFields.REG_ADDRESS}
                />
            </div>

            <div className="grid">
                <MyRadio
                    prefix={prefix}
                    options={BoolOptions}
                    name={EFormFields.MATCH_ADDRESS}
                    label="Адрес регистрации совпадает с адресом вашего фактического проживания?"
                />
            </div>

            <VisibleElement isVisible={isVisible} className="grid">
                <MyInput
                    prefix={prefix}
                    label="Адрес фактического проживания?"
                    name={EFormFields.ACTUAL_ADDRESS}
                />
            </VisibleElement>

        </div>

        <div className="block-sub">

            <div className="block-sub__title">
                <h4>Несовершенно летние дети</h4>
            </div>

            <div className="grid grid__row">
                <MyInput
                    label="Фамилия"
                    prefix={prefix_child}
                    name={EFormFields.LAST_NAME}
                />

                <MyInput
                    label="Имя"
                    prefix={prefix_child}
                    name={EFormFields.FIRST_NAME}
                />

                <MyInput
                    label="Отчество"
                    prefix={prefix_child}
                    name={EFormFields.SECOND_NAME}
                />

                <MyInput
                    mask="99.99.9999"
                    label="Дата рождения"
                    prefix={prefix_child}
                    name={EFormFields.BIRTH_DATE}
                />
            </div>

        </div>

    </WrapperBlock>
}

export default observer(Client);