import React, { Component } from "react";

import UserService from "../services/userService";



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require('..//images/car-service2.jpg')} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('..//images/car-service3.jpg')} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('..//images/car-service4.jpg')} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <header>
          
          <h3>Our Services</h3>
      </header>
      <div className="services">
       <section>
      <div className="product-card col-md-6">
        <img src={require('..//images/royal.jpg')} alt="Royal enfield" style={{width: "100%"}} />
        <h1>2 wheeler</h1>
        <p className="price">&#x20b9;50</p>
        <p>we are providing good services for Two wheeler</p>
        <p><button>Book </button></p>
      </div>

      <div className="product-card col-md-6" >
        <img src={require('..//images/auto.jpg')} alt="Auto" style={{width: "100%"}} />
        <h1>4 wheeler</h1>
        <p className="price">&#x20b9;100</p>
        <p></p>
        <p><button>Book </button></p>
      </div>

      <div className="product-card col-md-6">
        <img src={require('..//images/innova.jpg')} alt="Innova" style={{width: "100%"}} />
        <h1>4 wheeler</h1>
        <p className="price">&#x20b9; 200</p>
        <p>we are providing good services for four wheeler</p>
        <p><button>Book </button></p>
      </div>
      </section>
      </div>

      </div>
    );
  }
}
