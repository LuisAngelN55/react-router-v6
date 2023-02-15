import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./routes/Home"
import { Users } from "./routes/Users"
import { User } from "./routes/user"
import { About } from "./routes/About"
import { Layout } from "./Layout"



function App() {
  return (
      <Routes>

        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="users" element={ <Users /> } >
            <Route index element={ <h2>Seleccione un usuario</h2> } />
            <Route path=":userId" element={ <User /> } />
          </Route>
          <Route path="about" element={ <About /> } />

          {/* <Route path="/*" element={ <div>404 - Not Found</div>} /> */}
          <Route path="/*" element={ <Navigate to='/' replace />} />

        </Route>


      </Routes>

  )
}

export default App
