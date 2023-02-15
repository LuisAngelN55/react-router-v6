import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AppLayout } from "../box-pages/AppLayout";
import { HomeUser } from "../box-pages/HomeUser";
import { BoxRoutes } from "./BoxRoutes";
import { NotFound } from "../box-pages/NotFound";


export const AppRouter = () => {

 const status = 'authenticated';

//  if ( status === 'checking' ) {
//     return <h3>Checking</h3>
//   }

    const userName = 'luis';
    if ( status === 'authenticated' ) {

        return (
            <Routes>

                    <Route path="/" element={ <Navigate replace to={`/${userName}`} />} />
                    <Route path={`/:userNameId/*`} element={ <AppLayout />} >
                        <Route index element={ <HomeUser /> } />
                        <Route path="fcenter/" element={ <h2>Seleccione un box</h2> } />
                        <Route path="fcenter/:fCenterNameId/*" element={ <BoxRoutes /> } />
                        <Route path="settings" element={ <div>Settings Page</div>} />

                        <Route path="*" element={ <NotFound /> } />
                    </Route>

            </Routes>
        )
    }


  return (
    <Routes>
        <Route path="*" element={ <Navigate to="/auth" /> } />
        <Route path="/auth/*" element={<h1>Rutas de login</h1>} />
    </Routes> 
  )
}
