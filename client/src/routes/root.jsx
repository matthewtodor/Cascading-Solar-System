import './root.css';
import Planet from '../components/Planet';
import Navbar from '../components/navbar';

import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className='App'>
                <Planet name='Sun' scale='100'/>
                <div className='overlay'>
                    <Navbar />
                    <Outlet /> 
                </div>
            </div>

        </>
    );
}
