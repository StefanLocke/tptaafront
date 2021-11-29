import './App.css';
import React from "react";
import Meetings from './components/meetings';
import Users from './components/users';
import UserUpdater from './components/userUpdater';
import {
    BrowserRouter,
    useParams,
    Routes,
    Route,
    Link
} from "react-router-dom";
import LandingPage from "./components/landingPage";
import Dashboard from "./components/dashboard";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LandingPage></LandingPage>}/>
                <Route path={"/dashboard/:id"} element={<Dashboard></Dashboard>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App



