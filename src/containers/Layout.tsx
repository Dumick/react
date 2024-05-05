import React, {FC, useEffect} from "react";

import toDoStore from "../stores/ToDoStore";

import Body from "./Body";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout: FC = () => {

    useEffect(() => {
        toDoStore.getTodoData();

        return () => toDoStore.resetData();
    }, [])

    return <>
        <Header/>

        <div className="flex_layout">
            <Navigation/>
            <Body/>
        </div>
    </>
}

export default Layout;