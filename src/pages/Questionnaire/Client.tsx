import {FC} from "react";
import {observer} from "mobx-react-lite";
import WrapperBlock from "../../components/WrapperBlock";
import {ClientInfoRoute} from "../../models/routes";

const Client: FC = () => {
    return <WrapperBlock title={ClientInfoRoute.title}>
        <fieldset>
            
        </fieldset>
    </WrapperBlock>
}

export default observer(Client);