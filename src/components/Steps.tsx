import React, {FC, useId} from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {IRoute} from "../models/routes";
import {tabsOptions} from "../models";

export interface ITabsOptionItem {
    no: number
    label: string
    value: string
    route: IRoute
    checked: boolean
}

const Steps: FC = () => {
    return <div className="steps">
        {tabsOptions.map(item => {
            return <div className="steps__item" key={useId()}>
                <Link to={item?.route?.route} className="steps__item" >
                    <div className="steps__item--line"/>
                    <div className="steps__item--number">{item?.no}</div>
                </Link>
            </div>
        })}
    </div>
}

export default observer(Steps);