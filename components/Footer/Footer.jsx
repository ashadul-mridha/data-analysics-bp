/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className="container">
          <div className="row gx-5 gy-3 justify-content-center align-items-start">
            <div className="col-lg-6 col-12">
              <div className={styles.newsletterSection}>
                <div className={styles.logoFooter}>
                  <img
                    src={"/images/footerLogo.png"}
                    alt="logo of the site"
                  />
                </div>
                <p>Newsletter Signup*</p>
                <form action="">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                  <button className={styles.btnprimary} type="submit">
                    {" "}
                    Submit{" "}
                  </button>
                </form>
              </div>
            </div>
            {/* <div className="col-lg-2 col-6">
              <div className={styles.otherLinks}>
                <h6>OTHER LINKS</h6>
                <ul>
                  <li>
                    <Link href="#">
                      <a>Book Demo</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Case Study</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Knowledge Center</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Press Release</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Tutorials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Privacy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Security</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Terms</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-3 col-6">
              <div className={styles.intregrations}>
                <h6>Intregrations</h6>
                <ul>
                  <li>
                    <Link href="#">
                      <a>Gusto</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>zero</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>quickbooks online</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>quickbooks desktop</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>google sheet</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>gusto</a>
                    </Link>
                  </li>
                </ul>
                <h6 className="my-3">comparisons</h6>
                <ul>
                  <li>
                    <Link href="#">
                      <a>soptlight</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>syft</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>qvinci</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>jirav</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>fathom</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className={styles.contactus}>
                <h6>Contact us</h6>
                <ul>
                  <li>
                    <Link href="#">
                      <a> MESSAGE US</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>(877) 467-7637</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>FEEDBACK</a>
                    </Link>
                  </li>
                </ul>
                <div className={styles.socialIcon}>
                  {/* <FaFacebookSquare />
                  <FaYoutube />
                  <FaInstagramSquare />
                  <FaLinkedin />
                  <FaTwitterSquare /> */}
                  <div className={styles.facebook}>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className={styles.instagram}>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className={styles.utube}>
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                  <div className={styles.twitter}>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className={styles.linkedin}>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
