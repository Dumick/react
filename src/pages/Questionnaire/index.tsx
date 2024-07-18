import {FC} from "react";
import {observer} from "mobx-react-lite";
import {useForm, FormProvider} from "react-hook-form";

import Client from "./Client";
import Entity from "./Entity";

import formStore from "../../store/formStore";

const Questionnaire: FC = () => {
    const methods = useForm({
        defaultValues: formStore.preSaveForm,
    });

    const onSubmit = (data: any) => formStore.setDataForm(data);

    return <FormProvider {...methods}>
        <form className="questionnaire" onSubmit={methods.handleSubmit(onSubmit)}>

            <Client/>
            <Entity/>

            <button type="submit">Сохранить</button>
        </form>
    </FormProvider>
}

export default observer(Questionnaire);