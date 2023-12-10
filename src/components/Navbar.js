import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSearchData } from "../store/userDetailSlice";

const Navbar = () => {
	const users  = useSelector(store => store.userDetail.users);
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand">RTK</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Users ({users.length})
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=> dispatch(updateSearchData(e.target.value))}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
