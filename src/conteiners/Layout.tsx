import {FC} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import * as routes from "../models/routes";

import Client from "../pages/Questionnaire/Client";
import Entity from "../pages/Questionnaire/Entity";
import Immovable from "../pages/Questionnaire/Immovable";
import Founders from "../pages/Questionnaire/Founders";

const Layout: FC = () => {
    return <Router>
        <Routes>
            <Route path={routes.QUESTIONNAIRE}/>
            <Route path={routes.ClientInfoRoute.route} element={<Client/>}/>
            <Route path={routes.EntityInfoRoute.route} element={<Entity/>}/>
            <Route path={routes.FounderInfoRoute.route} element={<Founders/>}/>
            <Route path={routes.ImmovableInfoRoute.route} element={<Immovable/>}/>
        </Routes>
    </Router>
}

export default Layout;