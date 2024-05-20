import {FC} from "react";
import * as routes from "../models/routes";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Body from "./Body";
import Header from "./Header";
import Questionnaire from "../pages/Questionnaire";

const Layout: FC = () => {
    return <Body>
        <Header/>

        <Router>
            <Routes>
                <Route path='/' element={<Questionnaire/>}/>
            </Routes>
        </Router>
    </Body>
}

export default Layout;