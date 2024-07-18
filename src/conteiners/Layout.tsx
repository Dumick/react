import {FC} from "react";

import Body from "./Body";
import Header from "./Header";
import Steps from "../components/Steps";
import Questionnaire from "../pages/Questionnaire";

const Layout: FC = () => {
    return <Body>
        <Header/>
        {/*<Steps/>*/}

        <Questionnaire/>
    </Body>
}

export default Layout;