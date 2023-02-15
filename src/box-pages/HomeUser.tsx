import React from 'react'
import { Outlet } from 'react-router-dom'

export const HomeUser = () => {
  return (

    <div>
      <h1>Home user Page</h1>
      <Outlet />
    </div>
  )
}
