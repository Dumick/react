import {FC, useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";

import formStore from "../store/formStore";

import {ERequestStatus} from "../models/constant";

import Body from "./Body";
import Header from "./Header";
import Steps from "../components/Steps";

const Layout: FC = () => {

    const navigate = useNavigate();
    const handleHistory = () => {
        switch (formStore.status) {
            case ERequestStatus.QUESTIONARY:
                navigate("/questionnaire", {replace: true});
                break;
            case ERequestStatus.UPLOADING_DOCUMENTS:
                navigate("/documents", {replace: true});
                break;
        }
    }

    useEffect(() => handleHistory(), []);

    return <Body>
        <Header/>
        <Steps/>

        <Outlet/>
    </Body>
}

export default Layout;