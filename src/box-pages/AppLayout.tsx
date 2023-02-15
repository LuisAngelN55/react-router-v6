import React from 'react'
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom'

export const AppLayout = () => {

    const params = useParams();
    let userName = "luis";
    const {userNameId } = useParams();


    if( userNameId !== userName ) {
        return (
          <Routes>
              <Route path='*' element={ <Navigate replace to={"/" + userName } />} />
          </Routes>
      
          
        )
    }

  return (
    <div>
        <h1>Este es el Layout</h1>

        <main>
            <Outlet />
        </main>
    </div>
  )
}
