import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navigation />

      <h2 className="title">Home</h2>
      <main className="wrapper">
        <img className="cover" src="./images/1.jpg" alt="not found" />
        <h2>Try Our Popular Gadgets</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="./images/gopro.jpg" alt="Avatar" className="card-img" />
              <div className="container">
                <ul className="card-item">
                  <li>Online only</li>
                  <li>Go Pro</li>
                  <li>12 Hr battery backup</li>
                  <li>16MP sensor</li>
             
                </ul>
              </div>
              <Link
                state={{
                  pd: [
                    "Online only",
                    "Go Pro",
                    "Check for more details",
                    "16MP sensor",
                  ],
                  name: "Go Pro Camera",
                }}
                to="/detail"
              >
                <button className="card-btn">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./images/headphone.jpg"
                alt="Avatar"
                className="card-img"
              />
              <div className="container">
                <ul className="card-item">
                  <li>Online Only</li>
                  <li>Headphone by harman kardon</li>
                  <li>Wirelsess connection</li>
                  <li>20 hours battery backup</li>
                  
                </ul>
                <Link
                  state={{
                    pd: [
                      "Online Only",
                      "Headphone by harman kardon",
                      "Wireless connection",
                      "20 hours battery backup",
                    ],
                    img: "./images/headphone.jpg",
                    name: "Harman Kardon Headphones",
                  }}
                  to="/detail"
                >
                  <button className="card-btn">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./images/watch.jpg" alt="Avatar" className="card-img" />
              <div className="container">
                <ul className="card-item">
                  <li>Smart Watch</li>
                  <li>includes 2 straps</li>
                  <li>8 hour battery backup</li>
                  <li>Wireless charger</li>
                  <li>
                    {" "}
                    <div className="dropdown">
                      <span>Select an option</span>
                      <div className="dropdown-content">
                        <p>Pick-up</p>
                        <p>Delivery</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <Link
                  state={{
                    pd: [
                      "Smart Watch",
                      "Includes 2 straps",
                      "8 hour battery backup",
                      "Wireless charger",
                    ],
                    img: "./images/watch.jpg",
                    name: "Apple Watch Series 8",
                  }}
                  to="/detail"
                >
                  <button className="card-btn">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="./images/i12.jpg" alt="Avatar" className="card-img" />
              <div className="container">
                <ul className="card-item">
                  <li>Online only</li>
                  <li>64 GB storage</li>
                  <li>includes 3 months apple care</li>
                  <li>EMI available</li>
              
                </ul>
              </div>
              <Link
                state={{
                  pd: [
                    "Online only",
                    "64 GB storage",
                    "Includes 3 months apple care",
                    "EMI available",
                  ],
                  img: "./images/i12.jpg",
                  name: "Apple iPhone 12",
                }}
                to="/detail"
              >
                <button className="card-btn">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./images/ipad.jpg" alt="Avatar" className="card-img" />
              <div className="container">
                <ul className="card-item">
                  <li>Online Only</li>
                  <li>Ipad OS 13</li>
                  <li>128 GB storage</li>
                  <li>With 15 Watt charger</li>

               
                </ul>
                <Link
                  state={{
                    pd: [
                      "Online Only",
                      "Ipad OS 13",
                      "128 GB storage",
                      "With 15 Watt charger",
                    ],
                    img: "./images/ipad.jpg",
                    name: "Apple Ipad Pro 2021",
                  }}
                  to="/detail"
                >
                  <button className="card-btn">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./images/iwatch.jpg"
                alt="Avatar"
                className="card-img"
              />
              <div className="container">
                <ul className="card-item">
                  <li>Online Only</li>
                  <li>Series 7</li>
                  <li>45mm</li>
                  <li>12 hours battery backup</li>
                 
                </ul>
                <Link
                  state={{
                    pd: [
                        "Online Only",
                        "Series 7",
                        "45mm",
                        "12 hours battery backup",
                    ],
                    img: "./images/iwatch.jpg",
                    name: "Apple Watch Series 7",
                  }}
                  to="/detail"
                >
                  <button className="card-btn">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
