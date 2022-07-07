/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../../styles/Header.module.css";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className={styles.headerWrapper}>
        <style jsx>{`
          @media only screen and (max-width: 991px) {
            .navBar {
              position: absolute;
              top: 100px;
              left: 0;
              width: 100%;
              background-color: #010c1e;
              visibility: hidden;
              opacity: 0;
            }
            .navBar.open {
              visibility: visible;
              opacity: 1;
            }
          }
        `}</style>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className={styles.logo}>
              <img
                src={"/images/logo.jpeg"}
                alt="logo of the site"
              />
              {/* <h3 className="mb-0">Logo</h3> */}
            </div>
            <nav className={navbarOpen ? `navBar open` : "navBar"}>
              <ul className={styles.navContainer}>
                {/* <li>
                  <Link href={"/features"}>
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/pricing"}>
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/tutorials"}>
                    <a>Tutorials</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/registration"}>
                    <button className={`${styles.btnPrimary}`}>
                      Start Trail
                    </button>
                  </Link>
                </li> */}
                <li>
                  <Link href={"/demo"}>
                    <button className={`${styles.btnSecondary}`}>
                      Data Analysics Request
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={styles.navbaricon}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
