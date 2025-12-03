import React from 'react';
import './Login.css';
import { FaHome } from "react-icons/fa";
import { SiCakephp } from "react-icons/si";
import { BsCakeFill } from "react-icons/bs";
import { GiWrappedSweet } from "react-icons/gi";
import { GiEating } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FaMapLocationDot } from "react-icons/fa6";
import home2 from '../assets/hom.jpg';
import cake1 from '../assets/cake.jpeg'
import cake2 from '../assets/cake1.jpg'
import cake3 from '../assets/cake2.webp'
import cake4 from '../assets/cake3.jpeg'
import cake5 from '../assets/rain.jpeg'
import cake6 from '../assets/honey.jpeg'
import cake7 from '../assets/cheese.jpeg'
import cake8 from '../assets/butter.jpeg'
import cake9 from '../assets/straw.jpeg'
import cake10 from '../assets/blue.jpeg'
import cake11 from '../assets/venilla.jpeg'
import sweet1 from '../assets/gul.jpeg'
import sweet2 from '../assets/palkova.jpeg'
import sweet3 from '../assets/kaju.jpeg'
import sweet4 from '../assets/laddu.jpeg'
import sweet5 from '../assets/mysore.jpeg'
import sweet6 from '../assets/jelabi.jpeg'
import sweet7 from '../assets/rasamalai.jpeg'
import sweet8 from '../assets/thiru.jpeg'
import sweet9 from '../assets/son.jpeg'
import sweet10 from '../assets/adi.jpeg'
import sweet11 from '../assets/bad.jpeg'
import snack1  from '../assets/donut.jpeg'
import snack2  from '../assets/chobro.jpeg'
import snack3  from '../assets/muff.jpeg'
import snack4 from '../assets/pizza.jpeg'
import snack5  from '../assets/waffle.jpeg'
import snack6  from '../assets/roll.jpeg'
import snack7  from '../assets/fries.jpeg'
import snack8  from '../assets/burger.jpeg'
import snack9  from '../assets/tru.jpeg'
import snack10  from '../assets/pan.jpeg'
import snack11  from '../assets/cook.jpeg'
import snack12 from '../assets/am.jpeg'
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate=useNavigate();
  
 const addProduct = (name, price, image, unit) => {
  const newProduct = { name, price, image, unit };

 
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  existingCart.push(newProduct);
  localStorage.setItem("cart", JSON.stringify(existingCart));
  
  navigate("/cart");
};


 
  return (
    <div className="login">
      <nav>
        <h1 className='h'><SiCakephp /> BakeHub </h1>
        <ul>
          <a href="#" className='head'><FaHome /> Home</a>
          <a href="#cake">Cakes</a>
          <a href="#sweet">Sweets</a>
          <a href="#burger">Snacks</a>
          <a href="#about" >About</a>
          <a href="#location" >Contact & Location</a>
  
        </ul>
      </nav>

      <div className="photo">
       <img src={home2} alt=""  className='full-img'/>

{/* cakes Department */}
      </div>
      <h2 id='cake'>Cakes <BsCakeFill />
</h2>
      <div className="cake">
  <div className="cake-card">
    <img src={cake1} alt="" />
    <div className="cake-name">White-Forest</div>
    <p className="cake-price">₹479</p>
   <button 
 onClick={() => addProduct("White-Forest", 479, cake1,"Kg")}>
  Add
</button>

  </div>

  <div className="cake-card">
    <img src={cake2} alt="" />
    <div className="cake-name">Chocolate</div>
    <p className="cake-price">₹399</p>
    <button 
  onClick={() => addProduct("Chocolate", 399, cake2,"kg")}

>Add</button>

  </div>

  <div className="cake-card">
    <img src={cake3} alt="" />
    <div className="cake-name">Red-Velvet</div>
    <p className="cake-price">₹529</p>
    <button onClick={() => addProduct("Red-Velvet", 529, cake3,"Kg")}>Add</button>

  </div>

  <div className="cake-card">
    <img src={cake4} alt="" />
    <div className="cake-name">Black-Forest</div>
    <p className="cake-price">₹649</p>
    <button onClick={() => addProduct("Black-Forest", 649, cake4,"Kg")}>Add</button>
  </div>

  <div className="cake-card">
    <img src={cake5} alt="" />
    <div className="cake-name">Rainbow Cake</div>
    <p className="cake-price">₹699</p>
    <button onClick={() => addProduct("Rainbow Cake", 699, cake5,"Kg")}>Add</button>

  </div>
  <div className="cake-card">
    <img src={cake6} alt="" />
    <div className="cake-name">Honey-Cake</div>
    <p className="cake-price">₹349</p>
    <button onClick={() => addProduct("Honey-Cake", 349, cake6,"Kg")}>Add</button>

  </div>
  <div className="cake-card">
    <img src={cake7} alt="" />
    <div className="cake-name">Cheesy-Cake</div>
    <p className="cake-price">₹279</p>
    <button onClick={() => addProduct("Cheesy-Cake", 279, cake7,"Kg")}>Add</button>

  </div>
  <div className="cake-card">
    <img src={cake8} alt="" />
    <div className="cake-name">ButterScotch</div>
    <p className="cake-price">₹389</p>
    <button onClick={() => addProduct("ButterScotch", 389, cake8,"Kg")}>Add</button>
  </div>
  <div className="cake-card">
    <img src={cake9} alt="" />
    <div className="cake-name">Strawberry</div>
    <p className="cake-price">₹489</p>
    <button onClick={() => addProduct("Strawberry", 489, cake9,"Kg")}>Add</button>
  </div>
  <div className="cake-card">
    <img src={cake10} alt="" />
    <div className="cake-name">Blueberry</div>
    <p className="cake-price">₹399</p>
    <button onClick={() => addProduct("Blueberry", 399, cake10,"Kg")}>Add</button>
  </div>
  <div className="cake-card">
    <img src={cake11} alt="" />
    <div className="cake-name">Venilla</div>
    <p className="cake-price">₹359</p>
    <button onClick={() => addProduct("Venilla", 359, cake11,"Kg")}>Add</button>
  </div>


{/* Sweet Department */}
</div>
   <h2 id='sweet'>Sweets <GiWrappedSweet />
</h2>

<div className="sweets">
  <div className="sweet-card">
    <img src={sweet1} alt="" />
    <div className="sweet-name">Gulab-Jamun</div>
    <p className='sweet-price'>₹429</p>
     <button className='but' onClick={() => addProduct("Gulab-Jamun", 429, sweet1,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet2} alt="" />
    <div className="sweet-name">Polkava</div>
    <p className='sweet-price'>₹549</p>
    <button className='but'  onClick={() => addProduct("PalKova", 549, sweet2,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet3} alt="" />
    <div className="sweet-name">Kaju-Katli</div>
    <p className='sweet-price'>₹769</p>
     <button className='but'onClick={() => addProduct("Kaju-Katli", 769, sweet3,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet4} alt="" />
    <div className="sweet-name">Laddu</div>
    <p className='sweet-price'>₹289</p>
     <button className='but' onClick={() => addProduct("Laddu", 289, sweet4,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet5} alt="" />
    <div className="sweet-name">Mysore-Pak</div>
    <p className='sweet-price'>₹489</p>
     <button className='but' onClick={() => addProduct("Mysore-Pak", 489, sweet5,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet6} alt="" />
    <div className="sweet-name">Jelabi</div>
    <p className='sweet-price'>₹239</p>
     <button className='but'  onClick={() => addProduct("Jelabi", 239, sweet6,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet7} alt="" />
    <div className="sweet-name">RasaMalai</div>
    <p className='sweet-price'>₹359</p>
     <button className='but' onClick={() =>addProduct("RasaMalai", 359, sweet7,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet8} alt="" />
    <div className="sweet-name">Halwa</div>
    <p className='sweet-price'>₹269</p>
     <button className='but'onClick={() => addProduct("Halwa", 269, sweet8,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet9} alt="" />
    <div className="sweet-name">Soan Papdi</div>
    <p className='sweet-price'>₹399</p>
     <button className='but' onClick={() => addProduct("Soan Papd", 399, sweet9,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet10} alt="" />
    <div className="sweet-name">Adhirasam</div>
    <p className='sweet-price'>₹449</p>
     <button className='but'onClick={() =>addProduct("Adhirasam", 449, sweet10,"Kg")}>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet11} alt="" />
    <div className="sweet-name">Badusha</div>
    <p className='sweet-price'>₹299</p>
     <button className='but'onClick={() => addProduct("Badusha", 299, sweet11,"Kg")}>Add</button>
  </div>
</div>
{/* Snacks Department */}

<h2 id='burger'>Snacks <GiEating /></h2>
<div className="snacks">

  <div className="snack-card">
    <img src={snack1} alt="" />
    <div className="snack-name">Donut</div>
    <p className='snack-price'>₹69</p>
    <button className='snabut'onClick={() => addProduct("Donut", 69, snack1,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack2} alt="" />
    <div className="snack-name">Chocolate-Brownie</div>
    <p className='snack-price'>₹89</p>
    <button className='snabut'onClick={() => addProduct("Chocolate-Brownie", 89, snack2,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack3} alt="" />
    <div className="snack-name">Cup-Cake</div>
    <p className='snack-price'>₹99</p>
    <button className='snabut' onClick={() => addProduct("Cup-Cake", 99, snack3,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack4} alt="" />
    <div className="snack-name">Pizza</div>
    <p className='snack-price'>₹149</p>
    <button className='snabut'onClick={() => addProduct("Pizza", 149, snack4,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack5} alt="" />
    <div className="snack-name">Waffle</div>
    <p className='snack-price'>₹59</p>
    <button className='snabut'onClick={() => addProduct("Waffle", 59, snack5,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack6} alt="" />
    <div className="snack-name">Chocolate-Roll</div>
    <p className='snack-price'>₹99</p>
    <button className='snabut'onClick={() => addProduct("Chocolate-Roll", 99, snack6,"piece")}>Add</button>
  </div>
  
  <div className="snack-card">
    <img src={snack8} alt="" />
    <div className="snack-name">Burger</div>
    <p className='snack-price'>₹89</p>
    <button className='snabut'onClick={() => addProduct("Burger", 89, snack8,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack9} alt="" />
    <div className="snack-name">Truffle</div>
    <p className='snack-price'>₹109</p>
    <button className='snabut'onClick={() => addProduct("Truffle", 109, snack9,"piece",)}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack10} alt="" />
    <div className="snack-name">Pan Cake</div>
    <p className='snack-price'>₹79</p>
    <button className='snabut'onClick={() => addProduct("Pan Cake", 79, snack10,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack11} alt="" />
    <div className="snack-name">Cookies</div>
    <p className='snack-price'>₹29</p>
    <button className='snabut'onClick={() => addProduct("Cookies", 29, snack11,"piece")}>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack12} alt="" />
    <div className="snack-name">Samosa</div>
    <p className='snack-price'>₹19</p>
    <button className='snabut'onClick={() => addProduct("Samosa", 19, snack12,"piece")}>Add</button>
  </div>
 
  
</div>

{/* About Department */}

<h2 id='about'>About Us <FcAbout /></h2>
<div className="about">
<div className="who">
  <p className='w'>Who We Are</p>
  <p className='wh'>We are a passionate bakery dedicated to spreading sweetness through fresh cakes, sweets, and snacks made with love.”</p>

   </div>
<div className="who">
  <p className='w'>Our Story</p>
  <p className='wh'>“BakeHub began as a small kitchen dream and has grown into a place trusted by cake lovers.”</p>
</div>
<div className="who">
  <p className='w'>Our Promise</p>
  <li>Fresh ingredients</li>
  <li>Homemade taste</li>
  <li>Perfect hygiene</li>
  <li>No preservatives</li>
</div>
<div className="who">
  <p className='w'>Customer Reviews</p>
  <li>Best Bakery in town! </li>
  <li>Fresh and tasty every time.</li>
  <li>Perfect delivery and friendly service.</li>
</div>
</div>

  {/* Location part */}
  <h2 id='location'> Contact & Location <FaMapLocationDot /></h2>
    <div className="contact-page">

      <p className="contact-description">
        We’re always here to help you add sweetness to your day! 
        Reach out to us anytime for orders, support, or custom cakes.
      </p>
   <div className="cont">
    <div className="con">
      <div className="contact-section">
        <h3>📞 Contact Details</h3>
        <p><strong>Phone:</strong></p>
        <p>+91 98765 43210</p>
        <p>+91 91234 56789</p>

        <p><strong>Email:</strong></p>
        <p>support@bakehub.com</p>
        <p>orders@bakehub.com</p>

        <p><strong>Customer Support Hours:</strong><br />
        9:00 AM – 10:00 PM (All Days)</p>
      </div>

      <div className="location-section">
        <h3>📍 Our Location</h3>
        <p><strong>BakeHub – Main Branch</strong></p>
        <p>12/3, Lotus Street,<br />
           Near City Market,<br />
           Coimbatore, Tamil Nadu – 641001</p>
        <p><strong>Landmark:</strong> Opposite Royal Mart Supermarket</p>

        <p><strong>Delivery Areas:</strong><br />
        Coimbatore • Erode • Tiruppur • Salem</p>

        <p><strong>Delivery Timings:</strong><br />
        9:00 AM – 9:30 PM</p>
      </div>

      <div className="social-section">
        <h3>📱 Follow Us</h3>
        <p>Instagram: @bakehub_official</p>
        <p>Facebook: BakeHub Bakery</p>
        <p>WhatsApp: +91 98765 43210</p>
        <p>Twitter: bakehub.com</p>
      </div>
      </div>
      

    </div>
</div>
</div>
  );
}

export default Login;
