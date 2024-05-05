import {makeAutoObservable, runInAction} from "mobx";
import axios, {AxiosResponse} from "axios";

import {IToDoItem} from "../types";
import userStore from "./userStore";

class ToDoStore {
    list_user: string[] = [];
    list_to_do: IToDoItem[] = [];
    response: AxiosResponse<IToDoItem[]> = null;

    constructor() {
        makeAutoObservable(this)
    }

    public resetData = (): void => {
        this.list_user = [];
        this.list_to_do = [];
    }

    public toggleTodoItem = (todoId: number): void => {
        this.list_to_do.forEach(item => {
            if (item.id === todoId)
                item.completed = !item.completed;
        });
    }

    public removeTodoItem = (todoId: number): void => {
        this.list_to_do.filter(item => item.id !== todoId);
    }

    public setListToDo = (): void => {
        this.list_to_do = this.response.data.filter(todo => todo.userId === userStore.userId);
    }

    public toggleUser = (userId: number): void => {
        userStore.setUserId(userId);
        this.setListToDo();
    }

    public editToDoItem = (id: number, value: string): void => {
        this.list_to_do.forEach(item => {
            if (item.id === id) {
                item.title = value;
            }
        })
    }

    public deleteTodoItem = (id: number): void => {
        console.log(id)
        this.list_to_do = this.list_to_do.filter(item => item.id !== id);
    }

    public getTodoData = async () => {
        try {
            this.response = await axios.get('https://jsonplaceholder.typicode.com/todos')

            runInAction(() => {
                this.setListToDo();
                this.list_user = this.response.data.reduce((acc: string[], item) => {
                    if (!acc.includes(item.userId.toString()))
                        acc.push(item.userId.toString());

                    return acc;
                }, [])
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export default new ToDoStore();