import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          
          <form className="form-inline">
            <select className="select-language">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <button className="btn btn-danger btn-signin" onClick={clickHandler}>Signin</button>
          </form>
        </div>
      </nav>
    </header>
  )
}

export default Header;
