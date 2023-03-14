import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const RootLayout = () => {
  const [trashedTasks, setTrashTasks] = useState([]);

  const placeInTrash = () => {};
  return (
    <div className='bg-neutral-700 text-white'>
      <header>
        <nav className='p-6 flex w-100 justify-around'>
          <NavLink
            setTrashTasks={setTrashTasks}
            className={`uppercase hover:underline active:underline`}
            to='/'
          >
            Home
          </NavLink>
          <NavLink className={`uppercase hover:underline active:underline`} to='trash'>
            Trash
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
