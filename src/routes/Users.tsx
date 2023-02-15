import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { getAllUsers } from "../user"
import { ChangeEvent } from "react";


export const Users = () => {

  const users = getAllUsers();
  const [ searchParams, setSearchParams  ] = useSearchParams(); 
  const filter = searchParams.get('filter') ?? "";

  const location = useLocation();

  const handleFilter = ( e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams( {filter: e.target.value} )
  }

  return (
    <div>
      <h1>Users</h1>
      <input onChange={handleFilter} type="text" placeholder="filter" />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <ul>
          { users.filter( user => {
            if(!filter) return true;

            const name = user.name.toLocaleLowerCase();
            return name.includes(filter.toLocaleLowerCase());
          }).map( user => 
          <li key={ user.id }>
            <h2>
              <NavLink style={ ({ isActive}) => (isActive ? { color: 'red'} : {} ) }
              to={ user.id.toString() + location.search }>
                { user.name }
              </NavLink>
            </h2>
          </li> )}
        </ul>

        <article>
          <Outlet />
        </article>
      </div>

    </div>
  )
}
