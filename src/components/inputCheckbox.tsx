import {FC, HTMLAttributes, useState} from "react";
import toDoStore from "../stores/ToDoStore";
import {FaPen} from "@react-icons/all-files/fa/FaPen";
import {FaTrash} from "@react-icons/all-files/fa/FaTrash";
import {FaCaretRight} from "@react-icons/all-files/fa/FaCaretRight";

interface IProps extends HTMLAttributes<HTMLInputElement> {
    label: string
    to_do_id: number

    completed?: boolean
}

const InputCheckbox: FC<IProps> = (props) => {

    const [label, setLabel] = useState(props.label);
    const [isRewrite, setIsRewrite] = useState(false);

    return <div className={"checkbox"}>
        <input type="checkbox" name={"checkbox_" + props.to_do_id}
               id={'checkbox_' + props.to_do_id}
               checked={props.defaultChecked}
               onChange={props.onChange}
        />

        {!isRewrite && <label htmlFor={"checkbox_" + props.to_do_id}>{label}</label>}

        {isRewrite && <span className="checkbox__input">
            <input type="text" className="checkbox__input-label" value={label}
                   onChange={evt =>setLabel(evt.target.value)}
                   onKeyUp={evt => {
                       if (evt.key === 'Enter') {
                           setIsRewrite(false);
                           toDoStore.editToDoItem(props.to_do_id, label)
                       }
                   }}
            />
            <span className="checkbox__icon-wrapper save"
                  onClick={() => {
                      setIsRewrite(false);
                      toDoStore.editToDoItem(props.to_do_id, label)
                  }}>
                <FaCaretRight />
            </span>
        </span>
        }

        {!isRewrite && <span onClick={() => setIsRewrite(true)}
                             className={"checkbox__icon-wrapper pen" + (props.completed ? " active" : "")}>
            <FaPen fontSize="12px"/>
        </span>}

        {!isRewrite && <span onClick={() => toDoStore.deleteTodoItem(props.to_do_id)}
                             className={"checkbox__icon-wrapper trash" + (props.completed ? " active" : "")}>
            <FaTrash fontSize="12px"/>
        </span>}
    </div>
}

export default InputCheckbox;
