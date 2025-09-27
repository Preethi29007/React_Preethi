
import './Header1.css';
const Header1 = () => {
  return (
    <div className="Header">
      <nav className="menuHeader">
        <ul className="ulHeader">
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" 
              alt="E-Learning Logo"
              width="50"
              height="40"
            />
          </li>
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Blog</li>
          <li>Resources</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header1;