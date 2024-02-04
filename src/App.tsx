import React, {FC} from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App: FC = () => {

    return (
        <BrowserRouter>
            <NavLink to={"/users"}>Пользователи</NavLink>
            <NavLink to={"/todos"}>Список дел</NavLink>
            <Routes>
                {/*<Route path={"/"}/>*/}
                <Route path={"/users"} element={<UsersPage/>}/>
                <Route path={"/todos"} element={<TodosPage/>}/>
                <Route path={"/todos/:id"} element={<TodoItemPage/>}/>
                <Route path={"/users/:id"} element={<UserItemPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
