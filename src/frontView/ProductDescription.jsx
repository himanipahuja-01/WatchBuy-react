import React from "react";
import {
  BsStarHalf,
  BsStar,
  BsStarFill,
  BsFillCartFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function ProductDescription(props) {
  const [state, setState] = useState(1);
  const [data, setData] = useState({});

  let { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const increase = () => {
    return setState((prev) => {
      return prev + 1;
    });
  };

  const decrease = () => {
    return setState((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <div className="container mt-5 margin2">
        <div className="row">
          <div className="col-lg-5">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide border"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src={data.image}
                    className="d-block w-100 p-4"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src={data.image}
                    className="d-block w-100 p-4"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={data.image}
                    className="d-block w-100 p-4"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            <h2>{data.productname}</h2>
            <h4 className="text-secondary">{data.brand}</h4>
            <div className="text-danger d-inline">
              <span className="fa-1x m-1">
                <BsStarFill />
              </span>
              <span className="fa-1x m-1">
                <BsStarFill />
              </span>
              <span className="fa-1x m-1">
                <BsStarFill />
              </span>
              <span className="fa-1x m-1">
                <BsStarHalf />
              </span>
              <span className="fa-1x">
                <BsStar />
              </span>
              <p className="m-1 d-inline">(50 reviews)</p>
            </div>
            <h2 className="mt-4">Rs.{data.price}</h2>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              commodi repellat praesentium excepturi facilis dolore aspernatur
              iste odit iusto aut aliquam autem aperiam corrupti, optio officiis
              nihil quo perspiciatis magni!
            </p>

            <div className="d-inline">
              <p className="d-inline me-2 fw-bold">Sizes: </p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label">XS</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label">S</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label">M</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label">L</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label">L</label>
              </div>
            </div>

            <div className="mt-3">
              <p className="d-inline me-2 fw-bold">Colors: </p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label">Black</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label">White</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label">Red</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label">Blue</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label">L</label>
              </div>
            </div>

            <div className="d-flex mt-3 ">
              <button
                className="btn btn-primary rounded-0"
                type="button"
                onClick={decrease}
              >
                -
              </button>
              <input
                type="text"
                className="form-control bg-white text-center rounded-0"
                id="width"
                value={state}
              />
              <button
                className="btn btn-primary rounded-0"
                type="button"
                onClick={increase}
              >
                +
              </button>
              <button
                className="btn btn-primary ms-3 p-1 rounded-0"
                type="button"
              >
                {<BsFillCartFill />}Add to cart
              </button>
            </div>

            <div className="d-inline gap-2 d-md-block mt-5">
              <span>Share on: </span>
              <span className="fs-5 m-2">
                <BsFacebook />
              </span>
              <span className="fs-5 m-2">
                <BsTwitter />
              </span>
              <span className="fs-5 m-2">
                <BsLinkedin />
              </span>
              <span className="fs-5 m-2">
                <BsPinterest />
              </span>
            </div>
          </div>
        </div>
      </div>

      <ul
        className="nav nav-tabs justify-content-center border-secondary mb-4 mt-5"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Information
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Reviews(0)
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            alias delectus necessitatibus iusto dolore facere eligendi magni
            perspiciatis corporis repudiandae illum, cumque nisi aut deleniti,
            illo rerum sint optio dolor?
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            aliquid assumenda iste exercitationem deserunt veritatis ipsa
            voluptate, commodi dolor in sint necessitatibus porro a quam animi
            consectetur! Architecto, illum nisi.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            natus, unde dolorem, veniam odio ab, ipsum tempora minima atque
            possimus assumenda hic explicabo non fugiat sed dolore! Dolores,
            recusandae voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
