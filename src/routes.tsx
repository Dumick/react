import {createBrowserRouter} from "react-router-dom";
import Layout from "./conteiners/Layout";

import * as route from "./models/routes";

import Documents from "./pages/Documents";
import Questionnaire from "./pages/Questionnaire";

import Loan from "./pages/Questionnaire/Loan";
import Child from "./pages/Questionnaire/Childs";
import Client from "./pages/Questionnaire/Client";
import Entity from "./pages/Questionnaire/Entity";
import Vehicle from "./pages/Questionnaire/Vehicle";
import Accounts from "./pages/Questionnaire/Accounts";
import Founders from "./pages/Questionnaire/Founders";
import Immovable from "./pages/Questionnaire/Immovable";
import Spouse from "./pages/Questionnaire/Spouse";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: route.QUESTIONNAIRE,
                element: <Questionnaire/>,
                children: [
                    {
                        element: <Loan/>,
                        path: route.LoanParamsRoute.route,
                    },
                    {
                        element: <>
                            <Client/>
                            <Spouse/>
                            <Child/>
                        </>
                    ,
                        path: route.ClientInfoRoute.route,
                    },
                    {
                        element: <>
                            <Entity/>
                            <Founders/>
                            <Immovable/>
                            <Vehicle/>
                        </>,
                        path: route.EntityInfoRoute.route,
                    },
                    {
                        element: <Accounts/>,
                        path: route.AccountRoute.route,
                    }
                ]
            },
            {
                element: <Documents/>,
                path: route.DocumentRoute.route,
            }
        ]
    }
]);

export default routes;