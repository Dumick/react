import {FC} from "react";
import {observer} from "mobx-react-lite";

import Client from "./Client";
import Entity from "./Entity";
import Founders from "./Founders";
import Immovable from "./Immovable";

const Questionnaire: FC = () => {

    return <section className="questionnaire">
        <Client/>
        {/*<Entity/>*/}
        {/*<Founders/>*/}
        {/*<Immovable/>*/}
    </section>
}

export default observer(Questionnaire);