import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Carousel extends Component {
  render() {
    return (
      <>
      <div id="carouselExampleCaptions" className="carousel slide margin" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/carousel-1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/carousel-2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/carousel-2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  <div className="hero_area container-fluid">
  
    <section className=" slider_section position-relative">
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-2 col-md-4 col-lg-4">
                      <div className="slider_item-detail">
                        <div>
                          <h2 className="slider_heading">
                            50% OFF <br/>
                            First order
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nis
                          </p>
                          <div className="d-flex">
                            <Link to="" className="slider_btn">
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="hero_img-box">
                        <img src="images/hero.png" className = "img-fluid" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-2 col-md-4 col-lg-4">
                      <div className="slider_item-detail">
                        <div>
                          <h2 className="slider_heading">
                            50% OFF <br/>
                            First order
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nis
                          </p>
                          <div className="d-flex">
                            <Link to="" className="slider_btn">
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero_img-box">
                        <img src="images/hero.png" className = "img-fluid" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-2 col-md-4 col-lg-4">
                      <div className="slider_item-detail">
                        <div>
                          <h2 className="slider_heading">
                            50% OFF <br/>
                            First order
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nis
                          </p>
                          <div className="d-flex">
                            <Link to="" className="slider_btn">
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero_img-box">
                        <img src="images/shopping-illustration.webp" className = "img-fluid" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </Link>
      </div>
    </section>

  </div>

  <section className="detail_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="detail_img-box">
            <img src="images/detail.png" alt="" className="w-100"/>
          </div>
        </div>
        <div className=" col-lg-7">
          <div className="detail_container">
            <div className="detail-box d-box-1">
              <Link to="">
                <div className="detail-content">
                  <img src="images/d-1.png" alt=""/>
                  <h5>
                    Care kids
                  </h5>
                </div>
              </Link>
            </div>
            <div className="detail-box d-box-2">
              <Link to="">
                <div className="detail-content">
                  <img src="images/d-2.png" alt=""/>
                  <h5>
                    Baby boy
                  </h5>
                </div>
              </Link>
            </div>
            <div className="detail-box d-box-3">
              <Link to="">
                <div className="detail-content">
                  <img src="images/d-3.png" alt=""/>
                  <h5>
                    Baby girl
                  </h5>
                </div>
              </Link>
            </div>
            <div className="detail-box d-box-4">
              <Link to="">
                <div className="detail-content">
                  <img src="images/d-4.png" alt=""/>
                  <h5>
                    Sale
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <section className="products_section">
    <div className="heading_container">
      <h2>
        New Products In Store
      </h2>
      <p>
        Featured Product Just Arrived
      </p>
    </div> */}
   
    {/* <div className="container layout_padding">
      <div className="product_container">
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p1.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $120.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p2.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $110.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p3.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p4.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p5.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p6.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p7.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p8.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p9.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p10.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p11.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="product_box">
            <div className="product_img-box">
              <img src="images/p12.png" alt=""/>
              <span>
                Sale
              </span>
            </div>
            <div className="product_detail-box">
              <span>
                $150.00
              </span>
              <p>
                Passage of Lorem Ipsum, you
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section> */}

  <section className="find_section layout_padding-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-8 offset-md-2">
          <div className="find_container">
            <div className="row">
              <div className="col-sm-6">
                <div className="find_container-img">
                  <img src="images/find-img.png" alt=""/>
                </div>
              </div>
              <div className="col-sm-6">
                <h3>
                  Find Everything <br/>
                  From A to Z
                </h3>
                <p>
                  Shop Back to school
                </p>
              </div>
            </div>
          </div>
          <div className="shop_container">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  Shoes
                </p>
                <h3>
                  Shop by catagories
                </h3>
                <div>
                  <Link to="">
                    View More
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="shoe_img-box">
                  <img src="images/shoes.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="find_img-box">
            <img src="images/find-hero.png" className = "img-fluid"alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="client_section layout_padding">
    <div className="container">
      <h2>
        What our Customer says
      </h2>
      <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="row layout_padding2">
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt=""/>
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt=""/>
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row layout_padding2">
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt=""/>
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt=""/>
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row layout_padding2">
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt=""/>
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="client_box">
                  <div className="client_id-box">
                    <div className="client_img-box">
                      <img src="images/client.png" alt=""/>
                    </div>
                    <h4>Carlac liyo</h4>
                  </div>
                  <div className="client_detail">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in some
                      form, by injected humour, or randomised words which don't look
                      even slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className="carousel-control-prev" to="#carouselExample2Controls" role="button" data-slide="prev">

          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#carouselExample2Controls" role="button" data-slide="next">

          <span className="sr-only">Next</span>
        </Link>
      </div>

    </div>
    <div className="container">
      <div className="item_container">
        <div className="row">
          <div className="col-sm-7">
            <h3>
              Best offers on any makeup items
            </h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical
            </p>
            <div>
              <Link to="">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="item_img-box">
              <img src="images/items.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <section className="sign_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h3>
            Sign up for Newsletter
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered
          </p>
        </div>
        <div className="col-md-7">
          <form action="">
            <input type="email" placeholder="Enter your email"/>
            <button>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

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


      </>
    )
  }
}
