import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import { HomeApps } from '../box-pages/HomeApps';
import { NotFound } from '../box-pages/NotFound';

export const BoxRoutes = () => {

    const params = useParams();

    console.log(params)

    const fCenters = [
        {
            nameId: "box1",
            displayName: "Box - 1"
        },
        {
            nameId: "box2",
            displayName: "Box - 2"
        }
    ]

    const A = fCenters.find( fCenter => fCenter.nameId === params.fCenterNameId )
console.log(A)
    if( A ) {
        console.log("activando box:  ", params.fCenterNameId)
    
        return (
            <Routes>

            <Route path='/' element={ <HomeApps /> } />

            </Routes>
        )
    }

    return (
        <Routes>

            <Route path='*' element={ <NotFound /> } />

        </Routes>
    )

}
