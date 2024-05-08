import {FC} from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {IRoute} from "../models/routes";

export interface ITabsOptionItem {
    label: string
    value: string
    route: IRoute
    checked: boolean
}

type IProp = {
    name: string
    options: ITabsOptionItem[];
}

const MyTabs: FC<IProp> = (props) => {
    const {options, name} = props;

    return <fieldset className="my__tabs" id={name}>
        {options.map((optionItem, index) => {
            return <Link className="my__tabs--item" to={optionItem.route.route}>
                {index > 1 && <div className="my__tabs--item-line"/>}
                <input type="checkbox" className="my__tabs--item-input" name={optionItem.value + index} checked={optionItem.checked}/>
                <label className="my__tabs--item-label" htmlFor={optionItem.value + index}></label>
            </Link>
        })}
    </fieldset>
}

export default observer(MyTabs);