import React, {FC, useId} from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {IRoute} from "../models/routes";
import {tabsOptions} from "../models";

export interface ITabsOptionItem {
    no: number
    value: string
    route: IRoute
    checked: boolean
}

const Steps: FC = () => {

    return <div className="steps">
        <div className="wrapper">
            {tabsOptions.map((item, index) => {
                return <Link to={item?.route?.route} key={useId()} className="steps__item">
                    <p className="steps__item--number">{item?.no}</p>
                    <p className="steps__item--label">{item?.route?.title}</p>
                </Link>
            })}
        </div>
    </div>
}

export default observer(Steps);