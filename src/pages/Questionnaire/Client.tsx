import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {ClientInfoRoute} from "../../models/routes";
import MyInput from "../../components/form/Input";
import {CLIENT, EFormFields} from "../../models";

import {Control} from "react-hook-form";
import {TDefaultValue} from "../../models/schemes/defaultValue";

type TProp = {
    control: Control<TDefaultValue>
}

const Client: FC<TProp> = ({control}) => {
    return <WrapperBlock title={ClientInfoRoute.title}>
        <MyInput
            control={control}
            mask="(999)-999-99-99"
            label="Номер телефона"
            name={CLIENT + EFormFields.CLIENT_PHONE}
        />
        <MyInput
            control={control}
            label="Электронная почта"
            name={CLIENT + EFormFields.CLIENT_EMAIL}
        />

        <MyInput
            control={control}
            label="Фамилия"
            name={CLIENT + EFormFields.CLIENT_EMAIL}
        />
        <MyInput
            control={control}
            label="Имя"
            name={CLIENT + EFormFields.CLIENT_EMAIL}
        />
        <MyInput
            control={control}
            label="Отчество"
            name={CLIENT + EFormFields.CLIENT_EMAIL}
        />
    </WrapperBlock>
}

export default observer(Client);