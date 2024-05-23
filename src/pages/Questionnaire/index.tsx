import {FC} from "react";
import {observer} from "mobx-react-lite";
import {Controller, useForm} from "react-hook-form";

import Client from "./Client";
import {initialValue} from "../../models/schemes/defaultValue";

const Questionnaire: FC = () => {
    const {control, handleSubmit} = useForm({
        defaultValues: initialValue,
    });

    const onSubmit = data => console.log(data);

    return <form className="questionnaire" onSubmit={handleSubmit(onSubmit)}>
        <Client control={control}/>
    </form>
}

export default observer(Questionnaire);