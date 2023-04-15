import React from "react";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

function Details() {
  let location = useLocation();
  const { pd, name } = location.state;
  console.log(location.state.name);
  console.log(location.state.pd);
  return (
    <>
      <Navigation />
      <h2 className={"title"}>Product Detail Page</h2>
      <main className={"wrapper"}>
        <img className={"cover"} src={"./images/1.jpg"} alt={"not found"} />
        <div>
          <h1>{location.state.name}</h1>
        </div>
        <div>
          <img
            className={"detail-img"}
            src={location.state.img}
            alt={"not found"}
          />
        </div>
        <div>
          <h3>Product Description</h3>
          <ul>
            {location.state.pd.map((item,index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <div><button className="card-btn">Buy Now</button></div>
      </main>
    </>
  );
}

export default Details;
