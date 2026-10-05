
import React from 'react';
import './Foodwebsite.css';

export default function Foodwebsite() {
  return (
    <div id="welcome">
      <header>
        <h3>Welcome to Food Website</h3>
      </header>

      <nav id="navig">
        <img className="food" src="imagesfood.webp" alt="Food" />

        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

     
      <div id="home">
        <h2>Delicious Food, Delivered to You!</h2>

        <p>Order your favorite food from our menu.</p>

        <p>
          Experience the most delicious burgers, hot dogs, and crispy
          chicken in our premium fast food.
        </p>

        <p>
          We deliver delicious food right to your doorstep.
        </p>
<a href="#menu">

        <button>Explore Menu</button>
        </a>

       <img className="fon" src="burger.jpg"/>
      </div>
     
      <div id="menu">
        <h2>Our Menu</h2>

        <div className="food-item">
          <h3> Pizza</h3>
          <p>Cheesy and delicious pizza</p>
          <p>₹299</p>
          <button>Add to Cart</button>
        </div>

        <div className="food-item">
          <h3> Burger</h3>
          <p>Fresh and tasty burger</p>
          <p>₹199</p>
          <button>Add to Cart</button>
        </div>

        <div className="food-item">
          <h3>Pasta</h3>
          <p>Creamy and delicious pasta</p>
          <p>₹249</p>
          <button>Add to Cart</button>
        </div>
      </div>

      
      <div id="about">
        <h2>About Us</h2>
        <p>
          We serve fresh, tasty, and delicious food made with quality
          ingredients.
        </p>
      </div>

    
      <div id="contact">
        <h2>Contact Us</h2>
        <p>Have questions? Feel free to contact us.</p>
        <p>Email: Ambika@gmail.com</p>
      </div>
    </div>
  );
}

