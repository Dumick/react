import React, {FC, useState} from "react";
import {observer} from "mobx-react-lite";
import {ERoleCode, roleOptions, usersNameRole} from "../models";
import mainStore from "../store/mainStore";
import {ISelectOption} from "../models/types";

const Header: FC = () => {
    const [role, setRole] = useState<string>(mainStore.role);

    const onChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
        setRole(evt.target.value);
        mainStore.setRole(evt.target.value as ERoleCode);
    }

    return <header className='header'>
        <h3 className='header__logo'>MyForm</h3>

        <div className="header__right">
            <div className='header__role'>
                <select name="role" id="role"
                        value={role}
                        onChange={onChange}>
                    {Object.keys(roleOptions).map(item => {
                        const role: ISelectOption = roleOptions[item];
                        return <option key={role.value} value={role.value}>{role.label}</option>;
                    })}
                </select>
            </div>

            <p className='header__user' title='Текущий пользователь'>{usersNameRole[role]}</p>
        </div>
    </header>;
};

export default observer(Header);