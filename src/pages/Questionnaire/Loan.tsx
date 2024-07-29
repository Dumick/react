import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {LoanParamsRoute} from "../../models/routes";
import Input from "../../components/form/Input";
import {EFormFields, EFormPrefix, productOptions} from "../../models";
import {BoolOptions, GenderOptions} from "../../models/form";
import Range from "../../components/form/Range";
import Select from "../../components/form/Select";
import Radio from "../../components/form/Radio";

const LoanParams: FC = () => {
    const prefix = EFormPrefix.LOAN,
        prefix_contact = EFormPrefix.CONTACT;

    return <WrapperBlock title={LoanParamsRoute.title} id="loan">
        <fieldset>

            <div className="block-sub">

                <div className="grid grid__row">
                    <Select
                        prefix={prefix}
                        title="Кредитный продукт"
                        options={productOptions}
                        name={EFormFields.PRODUCT}
                    />

                    <Radio
                        prefix={prefix}
                        label="Необходимо ли вам поручительство?"
                        options={BoolOptions}
                        name={EFormFields.GUARANTY}
                    />
                </div>

                <div className="grid grid__row">
                    <Range
                        min={100_000}
                        step={25_000}
                        max={1_000_000}
                        prefix={prefix}
                        name={EFormFields.AMOUNT}
                        title="Укажите желаемую сумму кредита, руб."
                    />

                    <Range
                        min={6}
                        max={48}
                        prefix={prefix}
                        name={EFormFields.TERMINATE}
                        title="Выберите желаемый срок, мес."
                    />
                </div>

                <div className="grid">
                    <Radio
                        prefix={prefix}
                        options={BoolOptions}
                        name={EFormFields.SIGNATURE_TYPE}
                        label="Имеется ли у вас усилиннеая квалифицированная электронная подпись?"
                    />
                </div>
            </div>

            <div className="block-sub">

                <div className="block-sub__title">
                    <h4>Контактное лицо для работы с банком</h4>
                </div>

                <div className="grid grid__row">
                    <Input
                        label="Фамилия"
                        prefix={prefix_contact}
                        name={EFormFields.LAST_NAME}
                    />

                    <Input
                        label="Имя"
                        prefix={prefix_contact}
                        name={EFormFields.FIRST_NAME}
                    />

                    <Input
                        label="Отчество"
                        prefix={prefix_contact}
                        name={EFormFields.SECOND_NAME}
                    />
                </div>

                <div className="grid grid__row">
                    <Input
                        prefix={prefix_contact}
                        label="Номер телефона"
                        mask="+7-(999)-999-99-99"
                        name={EFormFields.PHONE}
                    />

                    <Input
                        prefix={prefix_contact}
                        label="Электронная почта"
                        name={EFormFields.EMAIL}
                    />

                    <Radio
                        label="Пол"
                        prefix={prefix_contact}
                        options={GenderOptions}
                        name={EFormFields.GENDER}
                    />
                </div>

            </div>

        </fieldset>
    </WrapperBlock>
}

export default observer(LoanParams);