import {FC} from "react";
import {observer} from "mobx-react-lite";
import {EFormFields, EFormPrefix} from "../../models";
import MyInput from "../../components/form/Input";
import MyRadio from "../../components/form/Radio";
import {BoolOptions, GenderOptions} from "../../models/form";
import VisibleElement from "../../components/VisibleElement";
import {EBoolean} from "../../models/schemes/defaultValue";
import {useFormContext} from "react-hook-form";

const Spouse: FC = () => {
    const {watch} = useFormContext();

    const prefix = EFormPrefix.SPOUSE + "." as EFormPrefix;
    const isMatchReg = watch(prefix + EFormFields.MATCH_SPOUSE_LEGAL) === EBoolean.NO;
    const isMatchActual = watch(prefix + EFormFields.MATCH_LEGAL_ACTUAL) === EBoolean.NO;

    return <article className="block">
        <fieldset className="block-sub">
            <div className="block-sub__title">
                <h4>Информация о супруге</h4>
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
                    label="ИНН"
                    prefix={prefix}
                    name={EFormFields.INN}
                />

                <MyRadio
                    label="Пол"
                    prefix={prefix}
                    options={GenderOptions}
                    name={EFormFields.GENDER}
                />

                <MyRadio
                    label="Наличие гражданства РФ"
                    prefix={prefix}
                    options={BoolOptions}
                    name={EFormFields.RESIDENT}
                />
            </div>

            <div className="block-sub__title">
                <h4>Пасспортные данные</h4>
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
                    mask="999 999"
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

            <div className="block-sub__title">
                <h4>Адресса</h4>
            </div>

            <div className="grid">
                <MyRadio
                    prefix={prefix}
                    options={BoolOptions}
                    name={EFormFields.MATCH_SPOUSE_LEGAL}
                    label="Ваш адрес регистрации совпадает с адресом супруга?"
                />
            </div>

            <VisibleElement isVisible={isMatchReg} className="grid__animated">
                <div className="grid">
                    <MyInput
                        prefix={prefix}
                        label="Адрес регистрации"
                        name={EFormFields.LEGAL_ADDRESS}
                    />
                </div>

                <div className="grid">
                    <MyRadio
                        prefix={prefix}
                        options={BoolOptions}
                        name={EFormFields.MATCH_LEGAL_ACTUAL}
                        label="Адрес регистрации совпадает с адресом вашего фактического проживания?"
                    />
                </div>

                <VisibleElement isVisible={isMatchActual} className="grid">
                    <MyInput
                        prefix={prefix}
                        label="Адрес фактического проживания?"
                        name={EFormFields.ACTUAL_ADDRESS}
                    />
                </VisibleElement>
            </VisibleElement>

        </fieldset>
    </article>
}

export default observer(Spouse);