import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item"><Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
        <div class={currentPage === '/' ? "frog-active" : "frog-inactive"}>🐸</div>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <div class={currentPage === '/Portfolio' ? "frog-active" : "frog-inactive"}>🐸</div>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          <div class={currentPage === '/Contact' ? "frog-active" : "frog-inactive"}>🐸</div>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          <div class={currentPage === '/Resume' ? "frog-active" : "frog-inactive"}>🐸</div>
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
