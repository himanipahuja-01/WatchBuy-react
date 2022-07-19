import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {  FiWatch } from "react-icons/fi";
import {  GiWatch } from "react-icons/gi";
import { BsSmartwatch , BsWatch } from "react-icons/bs";

export default class Carousel extends Component {
  render() {
    return (
      <>
      {/* <div id="carouselExampleCaptions" className="carousel slide margin" data-bs-ride="carousel">
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
</div> */}


  <div className="hero_area container-fluid margin">
  
    <section className="slider_section position-relative col-lg-12 col-sm-12 col-md-12 col-12">
      <div className="" data-ride="carousel">
        <div className="">
          <div className="">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-lg-2 offset-md-2 offset-1 offset-sm-1 col-md-12 col-lg-5 col-sm-12 col-12">
                      <div className="slider_item-detail">
                        <div>
                          <h3 className="slider_heading">
                            50% OFF <br/>
                            ON First order
                          </h3>
                          <p>
                          You can get a lot of options while searching for a watch for professional use. Brands like Kenneth Cole, Anne Klien, and Tommy Hilfiger are some of the top choices you can go for while looking for workwear accessories. You can also shop from the exclusive Titan workwear collection to find yourself some of the most stylish designs for office looks
                          </p>
                          <div className="d-flex">
                            <Link to="/About" className="slider_btn">
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="offset-sm-1 col-md-8 col-lg-4 col-xl-4">
                      <div className="hero_img-box">
                        <img src="images/mainn.svg" className = "img-fluid" style={{height: "400px"}} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item active">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container-fluid">
                  <div className="row">
                    <div className="offset-2 col-md-4 col-lg-4">
                      <div className="slider_item-detail">
                        <div>
                          <h2 className="slider_heading">
                            50% OFF <br/>
                            ON First order
                          </h2>
                          <p>
                          You can get a lot of options while searching for a watch for professional use. Brands like Kenneth Cole, Anne Klien, and Tommy Hilfiger are some of the top choices you can go for while looking for workwear accessories. You can also shop from the exclusive Titan workwear collection to find yourself some of the most stylish designs for office looks
                          </p>
                          <div className="d-flex">
                            <Link to="/About" className="slider_btn">
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero_img-box">
                        <img src="images/mainn.svg" className = "img-fluid" style={{height: "400px"}} alt=""/>
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
                            ON First order
                          </h2>
                          <p>
                          You can get a lot of options while searching for a watch for professional use. Brands like Kenneth Cole, Anne Klien, and Tommy Hilfiger are some of the top choices you can go for while looking for workwear accessories. You can also shop from the exclusive Titan workwear collection to find yourself some of the most stylish designs for office looks
                          </p>
                          <div className="d-flex mb-5">
                            <Link to="/About" className="slider_btn">
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hero_img-box">
                        <img src="images/mainn.svg" className = "img-fluid" style={{height: "400px"}} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
      <div className="row ">
        
        <div className="col-lg-12 col-md-6 col-sm-4 d-flex justify-content-center">
          <div className="detail_container">
            <div className="detail-box d-box-1">
              
                <div className="detail-content">
                  {/* <img src="images/d-1.png" alt=""/> */}
                  <BsSmartwatch className='fa-3x text-white'/>
                  <h5>
                    Fossil
                  </h5>
                </div>
              
            </div>
            <div className="detail-box d-box-2">
              
                <div className="detail-content">
                  {/* <img src="images/d-2.png" alt=""/> */}
                  <FiWatch className='fa-3x text-white'/>
                  <h5>
                    Titan
                  </h5>
                </div>
           
            </div>
            <div className="detail-box d-box-3">
              
                <div className="detail-content">
                  {/* <img src="images/d-3.png" alt=""/> */}
                  <GiWatch className='fa-3x text-white'/>
                  <h5>
                    Rado
                  </h5>
                </div>
              
            </div>
            <div className="detail-box d-box-4">
              
                <div className="detail-content">
                  {/* <img src="images/d-4.png" alt=""/> */}
                  <BsWatch className='fa-3x text-white'/>
                  <h5>
                  Daniel Klein
                  </h5>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="find_section layout_padding-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-10 col-10 offset-md-1">
          <div className="find_container">
            <div className="row">
              <div className="col-sm-8 col-8 col-6 col-lg-6 col-md-6">
                <div className="find_container-img">
                  <img src="images/find-img.jpg" className='' alt=""/>
                </div>
              </div>
              <div className="col-sm-4 col-4 col-md-4 col-lg-5 col-4">
                <h3>
                 SEASON OF SMILES <br/>
                  FLAT 20% OFF
                </h3>
                {/* <p>
                  Shop Back to school
                </p> */}
              </div>
            </div>
          </div>
          <div className="shop_container1">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Watches
                </h2>
                <h3>
                  Shop by catagories
                </h3>
                <div>
                  <Link to="/About" className='text-decoration-none'>
                    View More
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="shoe_img-box">
                  <img src="images/shoes.jpg" className='imaged' alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-sm-none d-xl-block d-lg-block d-none">
          <div className="find_img-box">
            <img src="images/find-hero.png" className = "img-fluid" alt=""/>
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
              <div className="col-lg-4">
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
              Best offers on any watch
            </h3>
            <p>
            Choose from a wide variety of kids watches that are fun, durable and bold. From superhero-themed watches for boys to Disney princess watches for girls, surprise your kids with cool new watches!
            </p>
            {/* <div>
              <Link to="">
                Shop Now
              </Link>
            </div> */}
          </div>
          <div className="col-sm-5">
            <div className="item_img-box">
              <img src="images/items.jpg" className="" alt=""/>
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

      </>
    )
  }
}
