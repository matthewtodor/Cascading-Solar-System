import './details.css';
import { useRouteLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

export default function Root() {
    const planetData = useRouteLoaderData('planet');

    useEffect(() => {
        console.log(planetData);
    }, []);

  return (
    <>
      <div className='details'>
        <span>hi</span>
      </div>
    </>
  );
}
