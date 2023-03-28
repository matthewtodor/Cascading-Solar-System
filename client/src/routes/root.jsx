import './root.css';
import Planets from '../components/planets';
import Navbar from '../components/navbar';

import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className='App'>
                <Navbar />
                <Planets />
                <Outlet />
            </div>

        </>
    );
}
