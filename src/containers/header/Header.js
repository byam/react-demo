import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/posts"> Posts </Link>
        </li>
        <li>
          <Link to="/create-post"> Create Post </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
