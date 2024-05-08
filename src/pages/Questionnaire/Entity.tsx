import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {EntityInfoRoute} from "../../models/routes";

const Entity: FC = () => {
    return <WrapperBlock title={EntityInfoRoute.title}>
        <fieldset>

        </fieldset>
    </WrapperBlock>
}

export default observer(Entity);