import React from 'react'
import {Link} from 'react-router-dom';


function FooterSection() {
    return (
        <div className="container-fluid container-footer">
        <div className="row">
          <div className="col-xl-3">
              <img className="img img-fluid" src="./images/logo-footer.png" alt=""/>
          </div>
          <div className="col-xl-2">
              <ul className="navbar-nav">
                  <li className="nav-item txt-footer">
                      <Link className="menu-footer" to="">Berita</Link>
                  </li>
                  <li className="nav-item txt-footer">
                      <Link className="menu-footer" to="">Pengumuman</Link>
                  </li>
                  <li className="nav-item txt-footer">
                      <Link className="menu-footer" to="">Tentang Kami</Link>
                  </li>
                  <li className="nav-item txt-footer">
                      <Link className="menu-footer" to="">Alamat</Link>
                  </li>
              </ul>
          </div>
          <div className="col-xl-4">
              <ul className="navbar-nav">
                  <li className="nav-item txt-footer">
                      <Link className="menu-footer" to="" >Contact Us</Link>
                  </li>
                  <li className="nav-item txt-footer">
                      <Link className="menu-footer" to="">Jl. Raya Pos Pengumben No.40,
                        Jakarta 11550</Link>
                  </li>
                  <li className="nav-item txt-footer">
                      <Link className="menu-footer" to="">(+62) 834524262</Link>
                  </li>
              </ul>
          </div>
          <div className="col-xl-3">
            <p className="menu-footer" >Copyright 2020, PortalUMKM</p>
          </div>
      </div>
      </div>
    )
}

export default FooterSection
