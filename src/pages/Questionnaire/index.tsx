import {FC, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";

import * as routes from "../../models/routes";

import formStore from "../../store/formStore";
import requestStore, {ERequestState} from "../../store/requestStore";
import {EFormFields, EFormPrefix} from "../../models";

const Questionnaire: FC = () => {
    const methods = useForm({
        defaultValues: {
            [EFormPrefix.CHILD]: [
                {
                    [EFormFields.LAST_NAME]: "",
                    [EFormFields.BIRTH_DATE]: "",
                    [EFormFields.FIRST_NAME]: "",
                    [EFormFields.SECOND_NAME]: "",
                }
            ]
        }
    });

    const location = useLocation();
    const navigate = useNavigate();
    const handleHistory = () => {
        switch (requestStore.state) {
            case ERequestState.LOAN:
                navigate(routes.LoanParamsRoute.route);
                break;
            case ERequestState.CLIENT:
                navigate(routes.ClientInfoRoute.route);
                break;
            case ERequestState.ENTITY:
                navigate(routes.EntityInfoRoute.route);
                break;
            case ERequestState.ACCOUNTS:
                navigate(routes.AccountRoute.route);
                break;
        }
    }

    useEffect(() => {
        if (location.pathname === routes.QUESTIONNAIRE)
            handleHistory();
    }, [location]);

    const onSubmit = (data: any) => console.log(data);

    return <FormProvider {...methods}>
        <form className="questionnaire" onSubmit={methods.handleSubmit(onSubmit)}>

            <Outlet/>

            <div className="questionnaire__btn">
                <button type="submit">Сохранить</button>
            </div>
        </form>
    </FormProvider>
}

export default observer(Questionnaire);