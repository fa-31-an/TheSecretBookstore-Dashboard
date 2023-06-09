import styles from "./index.module.css";

export const Header = ({userName = "Moni"}) => {
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand topbar mb-4 static-top shadow" style={{ backgroundColor: "#78288C" }}>
        {/* <!-- Sidebar Toggle (Topbar) --> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
         
          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className={`nav-item ${styles.avatarLogoContainer}`}>
              <i
                className={`fas fa-user ${styles.userLogo}`}
              ></i>
              <span className="text-600 small text-center">
                {userName}
              </span>
          </li>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
};
