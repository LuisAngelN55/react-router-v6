
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main>
        <nav>
            <Link to='/'>Home</Link> | {" "}
            <Link to='/users'>Users</Link> | {" "}
            <Link to='/about'>About</Link>
        </nav>

        <section>
            <Outlet />
        </section>
    </main>
  )
}
