import { Link } from "react-router-dom";

const Navbar = (props) => {
  const clickCart = () => {
    props.SetCartActive(true);
    props.SetHomeActive(false);
  };

  const clickHome = () => {
    props.SetCartActive(false);
    props.SetHomeActive(true);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand p-2">
          <Link to="/" className="nav-links" onClick={clickHome}>
            <span className="nav-links-icon">
              <i className="fas fa-pizza-slice navbar-brand"></i> Pizza Party
            </span>
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={clickHome}>
                <span
                  className={props.HomeActive ? "nav-link active" : "nav-link"}>
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={clickCart}>
                <span
                  className={props.CartActive ? "nav-link active" : "nav-link"}>
                  Shopping Cart
                </span>
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="nav-links-icon" onClick={clickCart}>
            <i
              className="fas fa-shopping-cart me-4"
              style={{ fontSize: "20px" }}>
              <span className="cart-number">
                {props.totalItems > 0 ? `(${props.totalItems})` : ""}
              </span>
            </i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
