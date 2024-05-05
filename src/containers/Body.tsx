import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import toDoStore from "../stores/ToDoStore";
import InputCheckbox from "../components/inputCheckbox";

const Body: FC = () => {
    return <main className="body">
        <ul className="to-do__list">
            {toDoStore?.list_to_do?.map(item => {
                return <li className="to-do__item" key={item.id}>
                    <InputCheckbox
                        completed={item.completed}
                        label={item.title}
                        to_do_id={item.id}
                        defaultChecked={item.completed}
                        onChange={() => toDoStore.toggleTodoItem(item.id)}
                    />
                </li>
            })}
        </ul>

    </main>
}

export default observer(Body);