import React, {FC, useEffect} from "react";
import {observer} from "mobx-react-lite";

import toDoStore from "../stores/ToDoStore";
import userStore from "../stores/userStore";

const Navigation: FC = () => {

    return <nav className="nav">
        <ul className="user__list">
            {toDoStore?.list_user?.map((item, index) => {
                return <li key={"user_" + item} className="user__item">
                    <span
                        onClick={() => toDoStore.toggleUser(+item)}
                        className={"user__item--index" + (userStore.userId === +item ? " active" : "")}
                    >{index + 1}</span>

                    <span
                        onClick={() => toDoStore.toggleUser(+item)}
                        className={"user__item--label" + (userStore.userId === +item ? " active" : "")}
                    >User_{item}</span>
                </li>
            })}
        </ul>
    </nav>
}

export default observer(Navigation);