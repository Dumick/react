import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {AccountRoute} from "../../models/routes";

const Founders: FC = () => {
    return <WrapperBlock title={AccountRoute.title} id="accounts">
        <fieldset>

        </fieldset>
    </WrapperBlock>
}

export default observer(Founders);