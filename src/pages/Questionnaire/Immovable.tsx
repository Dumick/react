import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {ImmovableInfoRoute} from "../../models/routes";

const Immovable: FC = () => {
    return <WrapperBlock title={ImmovableInfoRoute.title}>
        <fieldset>

        </fieldset>
    </WrapperBlock>
}

export default observer(Immovable);