import './root.css';
import Planets from '../components/planets';
import Navbar from '../components/navbar';

import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className='App'>
                <Planets />
                <div className='overlay'>
                    <Navbar />
                    <Outlet /> 
                </div>
            </div>

        </>
    );
}
