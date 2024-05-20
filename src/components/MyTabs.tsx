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

type TProp = {
    name: string
    options: ITabsOptionItem[];
}

const MyTabs: FC<TProp> = (props) => {
    const {options, name} = props;

    return <nav className="nav" id={name}>
        {options.map((optionItem, index) => {
            return <Link className="nav--item" to={optionItem.route.route}>
                {index > 1 && <div className="nav--item-line"/>}
                <input type="checkbox" className="nav--item-input" name={optionItem.value + index} checked={optionItem.checked}/>
                <label className="nav--item-label" htmlFor={optionItem.value + index}>{optionItem.label}</label>
            </Link>
        })}
    </nav>
}

export default observer(MyTabs);