import { Nav, Navbar } from "react-bootstrap";
import { CloudSun, PersonCircle } from "react-bootstrap-icons";
import { useLocation, Link } from "react-router-dom";

const NavbarMeteo = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        <CloudSun className="ms-3 fs-1" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link to="/savedloc" className={location.pathname === "/savedloc" ? "nav-link active" : "nav-link"}>
            Località salvate
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto d-flex flex-row me-3">
            <Nav.Link>
              <PersonCircle className="me-3 fs-3 text-white" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMeteo;
