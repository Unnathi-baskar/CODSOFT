const Header = () => {
    return (
      <header className="header">
        <div className="logo">Landing Page</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="consult-button">Request a Consult</button>
      </header>
    );
  };
  
  export default Header;