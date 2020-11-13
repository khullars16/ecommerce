import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section
        className="site-header"
        style={{ background: "#000", width: "100%" }}
      >
        <div className="header-top">
        <div className="container-style">
          
            <div className="row">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <div className="nav-logo">
                  <Link to="/"><img src="/assets/images/logo.png" alt="logo" /></Link>
                </div>
              </div>
              <div className="col-md-10 col-lg-10 col-xl-10">
                <div className="top-search">
                  <div className="nav-search">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-outline-secondary dropdown-toggle dd-btn"
                          type="button"
                          data-toggle="dropdown"
                        >
                          Dropdown
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div role="separator" className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                      />
                    </div>
                  </div>
                  <div className="nav-cart-menu">
                    <ul>
                      <li>compare</li>
                      <li>my wish list</li>
                      <li>your cart</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>



          <div className="bottom-header">
          <div className="container-style">
          
            <ul>
              <li>TABBLETS &amp; IPAD</li>
              <li><Link to="/computer">COMPUTER</Link></li>
              <li><Link to="/computer">SPORT</Link></li>
              <li>FIND A STORE</li>
            </ul>
            <ul>
              <li>USD</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
