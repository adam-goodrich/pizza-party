import PizzaHero from "../PizzaHero.jpeg";
import CheesePizza from "../CheesePizza.jpeg";
import MeatPizza from "../MeatPizza.jpeg";
import VeggiePizza from "../VeggiePizza.jpeg";
import { HashLink } from "react-router-hash-link";

function App(props) {
  // when button is clicked on pizza type it gets the pizza type using element ID
  // and value in input box. Updates total number of Pizza's and specific pizza count as well

  const addToCart = (elementID) => {
    const inputElement = document.getElementById(elementID);
    const amountToAdd = inputElement.value;

    // changes spesific pizzas
    if (elementID === "cheesePizzaCount") {
      if (amountToAdd < 1) {
        //pass if input value is 0 or null
      } else {
        props.SetTotalCheese(props.totalCheese + parseInt(amountToAdd));
      }
    } else if (elementID === "meatPizzaCount") {
      if (amountToAdd < 1) {
        //pass if input value is 0 or null
      } else {
        props.SetTotalMeat(props.totalMeat + parseInt(amountToAdd));
      }
    } else if (elementID === "VeggiePizzaCount") {
      if (amountToAdd < 1) {
        //pass if input value is 0 or null
      } else {
        props.SetTotalVeggie(props.totalVeggie + parseInt(amountToAdd));
      }
    }
  };

  function increment(elementID) {
    let inputElement = document.getElementById(elementID);

    if (inputElement.value <= 0) {
      inputElement.value = 1;
    } else {
      inputElement.value = parseInt(inputElement.value) + 1;
    }
  }
  function decrement(elementID) {
    let inputElement = document.getElementById(elementID);
    if (inputElement.value <= 0) {
      inputElement.value = 0;
    } else {
      inputElement.value = inputElement.value - 1;
    }
  }

  return (
    <div>
      <section id="hero-image">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg hero-image">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 mb-5">
              <i className="fas fa-pizza-slice"></i>
              <b> Pizza Party</b> brings the party to you!
            </h1>
            <p className="lead">
              We make pizza for people who like to party! Order one of our many
              classic pizza's that are guaranteed to make any party pop! Scroll
              down and click on one of our great options to add to your cart. We
              have an option for all types of parties. What are you waiting for!
            </p>
            <HashLink
              to="/home#order-cards"
              className="btn btn-primary btn-lg mt-2 mb-4">
              Click to see our options!
            </HashLink>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={PizzaHero} alt="" width="965" />
          </div>
        </div>
      </section>
      <div id="order-cards" className="sudo-cards"></div>
      <section id="order-cards" className="order-cards">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="card mt-3 mb-3">
                <img src={CheesePizza} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Cheese Pizza - $9.99</h5>
                  <p className="card-text">
                    The classic for the cheese lover. You wont be cheesy if you
                    bring this to the party. It's a classic for a reason. Red
                    sauce and cheese baked to perfection. Add it now!
                  </p>
                  <div className="row">
                    <div className="input-group mb-4 col-xs-1 center-block">
                      <button
                        className="btn btn-secondary "
                        onClick={() => decrement("cheesePizzaCount")}>
                        -
                      </button>
                      <input
                        type="number"
                        id="cheesePizzaCount"
                        name="cheese-pizza"
                        min="0"
                        max="10"
                        className="text-center input-fields"
                        placeholder="0"></input>
                      <button
                        className="btn btn-secondary me-1"
                        onClick={() => increment("cheesePizzaCount")}>
                        +
                      </button>

                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart("cheesePizzaCount")}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  {props.totalCheese === 0 ? (
                    <p className="alert alert-info">No Cheese in cart yet</p>
                  ) : (
                    <p className="alert alert-success">
                      Total Cheese in cart: {props.totalCheese}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="card mt-3 mb-3">
                <img src={MeatPizza} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Meatlovers - $14.99</h5>
                  <p className="card-text">
                    Bring this to the party if you are bold! This one is sure to
                    make an impression. You know you want it. Red sauce and
                    cheese with bacon, ham, sausage, and pepperoni.
                  </p>
                  <div className="row">
                    <div className="input-group mb-4 col-xs-1 center-block">
                      <button
                        className="btn btn-secondary "
                        onClick={() => decrement("meatPizzaCount")}>
                        -
                      </button>
                      <input
                        type="number"
                        id="meatPizzaCount"
                        name="meatPizzaCount"
                        min="0"
                        max="100"
                        className="text-center input-fields"
                        placeholder="0"></input>
                      <button
                        className="btn btn-secondary me-1"
                        onClick={() => increment("meatPizzaCount")}>
                        +
                      </button>
                      <button
                        className="btn btn-primary me-1"
                        onClick={() => addToCart("meatPizzaCount")}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  {props.totalMeat === 0 ? (
                    <p className="alert alert-info">
                      No Meatlovers in cart yet
                    </p>
                  ) : (
                    <p className="alert alert-success">
                      Total Meatlovers in cart: {props.totalMeat}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="card mt-3 mb-3">
                <img src={VeggiePizza} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Vegan Pizza - $12.99</h5>
                  <p className="card-text">
                    Veggies party all night long. This is sure to make you the
                    life of the party. Grab one today (maybe more than one).
                    Vegan bechamel sauce with vegan cheese, asparagus, and
                    arugala.
                  </p>
                  <div className="input-group mb-4">
                    <button
                      className="btn btn-secondary "
                      onClick={() => decrement("VeggiePizzaCount")}>
                      -
                    </button>
                    <input
                      type="number"
                      id="VeggiePizzaCount"
                      name="VeggiePizzaCount"
                      min="0"
                      max="10"
                      className="text-center input-fields"
                      placeholder="0"></input>
                    <button
                      className="btn btn-secondary me-1"
                      onClick={() => increment("VeggiePizzaCount")}>
                      +
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart("VeggiePizzaCount")}>
                      Add to cart
                    </button>
                  </div>
                  {props.totalVeggie === 0 ? (
                    <p className="alert alert-info">No Vegan in cart yet</p>
                  ) : (
                    <p className="alert alert-success">
                      Total Vegan in cart: {props.totalVeggie}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="order-cards" className="sudo-cards-down"></div>

      <section id="carousel">
        <div className="">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={CheesePizza} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={MeatPizza} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={VeggiePizza} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
