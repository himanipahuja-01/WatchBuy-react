import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
      {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-dark">
    <section className="info_section layout_padding">
    <div className="container links_container">
      <div className="row ">
        <div className="col-md-3">
          <h3>
            CUSTOMER SERVICE
          </h3>
          <ul>
            <li>
              <Link to="">
                International Help
              </Link>
            </li>
            <li>
              <Link to="">
                Contact Customer Care
              </Link>
            </li>
            <li>
              <Link to="">
                Return Policy
              </Link>
            </li>
            <li>
              <Link to="">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link to="">
                Promotion Terms
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>
            LET US HELP YOU
          </h3>
          <ul>
            <li>
              <Link to="">
                Your Account
              </Link>
            </li>
            <li>
              <Link to="">
                Your Orders
              </Link>
            </li>
            <li>
              <Link to="">
                Shipping Rates &amp; Policies
              </Link>
            </li>
            <li>
              <Link to="">
                Amazon Prime
              </Link>
            </li>
            <li>
              <Link to="">
                Returns &amp; Replacements
              </Link>
            </li>
            <li>
              <Link to="">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>
            INFORMATION
          </h3>
          <ul>
            <li>
              <Link to="">
                About Us
              </Link>
            </li>
            <li>
              <Link to="">
                Careers
              </Link>
            </li>
            <li>
              <Link to="">
                Sell on shop
              </Link>
            </li>
            <li>
              <Link to="">
                Press &amp; News
              </Link>
            </li>
            <li>
              <Link to="">
                Competitions
              </Link>
            </li>
            <li>
              <Link to="">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>
            OUR SHOP
          </h3>
          <ul>
            <li>
              <Link to="">
                Daily Deals
              </Link>
            </li>
            <li>
              <Link to="">
                App Only Deals
              </Link>
            </li>
            <li>
              <Link to="">
                Our Hottest Products
              </Link>
            </li>
            <li>
              <Link to="">
                Gift Vouchers
              </Link>
            </li>
            <li>
              <Link to="">
                Trending Product
              </Link>
            </li>
            <li>
              <Link to="">
                Hot Flash Sale
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="follow_container">
        <div className="row">
          <div className="col-md-9">
            <div className="app_container">
              <h3>
                DOWNLOAD OUR APPS

              </h3>
              <div>
                <img src="images/google-play.png" alt=""/>
                <img src="images/apple-store.png" alt=""/>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="info_social">
              <div>
                <Link to="">
                  <img src="images/fb.png" alt=""/>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img src="images/twitter.png" alt=""/>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img src="images/linkedin.png" alt=""/>
                </Link>
              </div>
              <div>
                <Link to="">
                  <img src="images/instagram.png" alt=""/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container-fluid footer_section">
    <p>
      Copyright © 2019 All Rights Reserved By
      <Link to="https://html.design/">Free Html Templates</Link>
    </p>
  </section>

    </div>
    {/* <!-- Footer End --> */}


      </>
    )
  }
}
