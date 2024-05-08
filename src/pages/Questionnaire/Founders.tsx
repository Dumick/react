import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {FounderInfoRoute} from "../../models/routes";

const Founders: FC = () => {
    return <WrapperBlock title={FounderInfoRoute.title}>
        <fieldset>

        </fieldset>
    </WrapperBlock>
}

export default observer(Founders);