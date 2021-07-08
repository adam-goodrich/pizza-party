import { Link } from "react-router-dom";
import React from "react";
import PizzaChef from "../PizzaChef.jpeg";
import EmptyBox from "../EmptyBox.jpeg";

const Cart = (props) => {
  const updateCart = (elementID) => {
    const inputElement = document.getElementById(elementID);
    const amountToAdd = inputElement.value;

    // changes spesific pizzas
    if (elementID === "cheesePizzaCount") {
      if (amountToAdd < 1) {
        //pass if input value is 0 or null
      } else {
        props.SetTotalCheese(parseInt(amountToAdd));
      }
    } else if (elementID === "meatPizzaCount") {
      if (amountToAdd < 1) {
        //pass if input value is 0 or null
      } else {
        props.SetTotalMeat(parseInt(amountToAdd));
      }
    } else if (elementID === "VeggiePizzaCount") {
      if (amountToAdd < 1) {
        //pass if input value is 0 or null
      } else {
        props.SetTotalVeggie(parseInt(amountToAdd));
      }
    }
  };

  const remove = (elementID) => {
    if (elementID === "cheesePizzaCount") {
      props.SetTotalCheese(0);
    } else if (elementID === "meatPizzaCount") {
      props.SetTotalMeat(0);
    } else if (elementID === "VeggiePizzaCount") {
      props.SetTotalVeggie(0);
    }
  };

  function incrementCart(elementID) {
    let inputElement = document.getElementById(elementID);

    if (inputElement.value <= 0) {
      inputElement.value = 1;
    } else {
      inputElement.value = parseInt(inputElement.value) + 1;
    }
  }
  function decrementCart(elementID) {
    let inputElement = document.getElementById(elementID);
    if (inputElement.value <= 1) {
      inputElement.value = 1;
    } else {
      inputElement.value = inputElement.value - 1;
    }
  }
  return (
    <div>
      <section id="top">
        <div className="container text-center mt-5 mb-3">
          {props.totalItems === 0 ? (
            <h1 className="alert alert-danger">
              You got to add some pizza to have a pizza party
            </h1>
          ) : (
            <h2 className="alert alert-warning">
              You're almost ready to party!
            </h2>
          )}
        </div>
      </section>
      {props.totalItems === 0 ? (
        <div className="container">
          <h1 className="display-3 text-center ">No items in cart</h1>
          <img
            src={EmptyBox}
            className="img-fluid m-4 rounded mx-auto d-block"
            alt="chef cooking a pizza"
          />
        </div>
      ) : (
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h1 class="display-4 fw-bold lh-1 mb-5 text-center">
                  <i className="fas fa-pizza-slice"></i>
                  <b> Pizza Party</b>
                </h1>
                <img
                  src={PizzaChef}
                  className="img-fluid rounded mt-3 mb-5"
                  alt="chef cooking a pizza"
                />
              </div>
              <div className="col-lg-6 col-12">
                <h1 className="text-muted mt-3 mb-5 text-center">
                  Let's double check everything
                </h1>
                {props.totalCheese ? (
                  <div className="m-3 mt-4">
                    <div className="row">
                      <div className="col-8">
                        <h2 className="text-start">
                          Cheese Pizza x {props.totalCheese}
                        </h2>
                      </div>
                      <div className="col-4">
                        <h2 className="text-end">
                          ${(props.totalCheese * 9.99).toFixed(2)}
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-group mb-4 col-xs-1 center-block mt-3 mb-5">
                        <button
                          className="btn btn-secondary p-2"
                          onClick={() => decrementCart("cheesePizzaCount")}>
                          -
                        </button>
                        <input
                          type="number"
                          id="cheesePizzaCount"
                          name="cheese-pizza"
                          min="1"
                          max="10"
                          className="text-center input-fields p-1"
                          defaultValue={props.totalCheese}></input>
                        <button
                          className="btn btn-secondary me-1 p-2"
                          onClick={() => incrementCart("cheesePizzaCount")}>
                          +
                        </button>
                        <button
                          className="btn btn-outline-primary ms-2"
                          onClick={() => updateCart("cheesePizzaCount")}>
                          Update cart
                        </button>
                        <button
                          className="btn btn-outline-danger ms-2"
                          onClick={() => remove("cheesePizzaCount")}>
                          Remove
                        </button>
                      </div>
                      <hr></hr>
                    </div>
                  </div>
                ) : null}
                {props.totalMeat ? (
                  <div className=" m-3 mt-4">
                    <div className="row">
                      <div className="col-8">
                        <h2 className="text-start">
                          Meatlovers Pizza x {props.totalMeat}
                        </h2>
                      </div>
                      <div className="col-4">
                        <h2 className="text-end">
                          ${(props.totalMeat * 14.99).toFixed(2)}
                        </h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-group mb-4 col-xs-1 center-block mt-3 mb-5">
                        <button
                          className="btn btn-secondary p-2"
                          onClick={() => decrementCart("meatPizzaCount")}>
                          -
                        </button>
                        <input
                          type="number"
                          id="meatPizzaCount"
                          name="meat-pizza"
                          min="1"
                          max="10"
                          className="text-center input-fields p-1"
                          defaultValue={props.totalMeat}></input>
                        <button
                          className="btn btn-secondary me-1 p-2"
                          onClick={() => incrementCart("meatPizzaCount")}>
                          +
                        </button>
                        <button
                          className="btn btn-outline-primary ms-2"
                          onClick={() => updateCart("meatPizzaCount")}>
                          Update cart
                        </button>
                        <button
                          className="btn btn-outline-danger ms-2"
                          onClick={() => remove("meatPizzaCount")}>
                          Remove
                        </button>
                      </div>
                      <hr></hr>
                    </div>
                  </div>
                ) : null}
                {props.totalVeggie ? (
                  <div className=" m-3 mt-4">
                    <div className="row">
                      <div className="col-8">
                        <h3 className="text-start">
                          Vegan Pizza x {props.totalVeggie}
                        </h3>
                      </div>
                      <div className="col-4">
                        <h3 className="text-end">
                          ${(props.totalVeggie * 12.99).toFixed(2)}
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-group mb-4 col-xs-1 center-block mt-3 mb-5">
                        <button
                          className="btn btn-secondary p-2"
                          onClick={() => decrementCart("VeggiePizzaCount")}>
                          -
                        </button>
                        <input
                          type="number"
                          id="VeggiePizzaCount"
                          name="meat-pizza"
                          min="1"
                          max="10"
                          className="text-center input-fields p-1"
                          defaultValue={props.totalVeggie}></input>
                        <button
                          className="btn btn-secondary me-1 p-2"
                          onClick={() => incrementCart("VeggiePizzaCount")}>
                          +
                        </button>
                        <button
                          className="btn btn-outline-primary ms-2"
                          onClick={() => updateCart("VeggiePizzaCount")}>
                          Update cart
                        </button>
                        <button
                          className="btn btn-outline-danger ms-2"
                          onClick={() => remove("VeggiePizzaCount")}>
                          Remove
                        </button>
                      </div>
                      <hr></hr>
                    </div>
                  </div>
                ) : null}
                <div className=" m-3 mt-3">
                  <div className="row">
                    <div className="col-8">
                      <h3 className="text-start">Grand Total:</h3>
                    </div>
                    <div className="col-4">
                      <h3 className="text-end">
                        $
                        {(
                          props.totalVeggie * 12.99 +
                          props.totalMeat * 14.99 +
                          props.totalCheese * 9.99
                        ).toFixed(2)}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className=" text-center">
                    <div class="d-grid gap-2">
                      <Link to="/party" className="btn btn-success  mb-5  mt-2">
                        <h3 className="pt-1">Checkout</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
