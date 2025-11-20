import React from 'react';
import './Login.css';
import { FaHome } from "react-icons/fa";
import { SiCakephp } from "react-icons/si";
import { BsCakeFill } from "react-icons/bs";
import { GiWrappedSweet } from "react-icons/gi";
import { GiEating } from "react-icons/gi";

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


function Login() {
  
  return (
    <div className="login">
      <nav>
        <h1 className='h'><SiCakephp /> BakeHub </h1>
        <ul>
          <a href="#" className='head'><FaHome /> Home</a>
          <a href="#cake">Cakes</a>
          <a href="#sweet">Sweets</a>
          <a href="#burger">Snacks</a>
          <a href="#" >About</a>
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
    <button>Add</button>
  </div>

  <div className="cake-card">
    <img src={cake2} alt="" />
    <div className="cake-name">Chocolate</div>
    <p className="cake-price">₹399</p>
    <button>Add</button>

  </div>

  <div className="cake-card">
    <img src={cake3} alt="" />
    <div className="cake-name">Red-Velvet</div>
    <p className="cake-price">₹529</p>
    <button>Add</button>

  </div>

  <div className="cake-card">
    <img src={cake4} alt="" />
    <div className="cake-name">Black-Forest</div>
    <p className="cake-price">₹649</p>
    <button>Add</button>
  </div>

  <div className="cake-card">
    <img src={cake5} alt="" />
    <div className="cake-name">Rainbow Cake</div>
    <p className="cake-price">₹699</p>
    <button>Add</button>

  </div>
  <div className="cake-card">
    <img src={cake6} alt="" />
    <div className="cake-name">Honey-Cake</div>
    <p className="cake-price">₹349</p>
    <button>Add</button>

  </div>
  <div className="cake-card">
    <img src={cake7} alt="" />
    <div className="cake-name">Cheesy-Cake</div>
    <p className="cake-price">₹279</p>
    <button>Add</button>

  </div>
  <div className="cake-card">
    <img src={cake8} alt="" />
    <div className="cake-name">ButterScotch</div>
    <p className="cake-price">₹389</p>
    <button>Add</button>
  </div>
  <div className="cake-card">
    <img src={cake9} alt="" />
    <div className="cake-name">Strawberry</div>
    <p className="cake-price">₹489</p>
    <button>Add</button>
  </div>
  <div className="cake-card">
    <img src={cake10} alt="" />
    <div className="cake-name">Blueberry</div>
    <p className="cake-price">₹399</p>
    <button>Add</button>
  </div>
  <div className="cake-card">
    <img src={cake11} alt="" />
    <div className="cake-name">Venilla</div>
    <p className="cake-price">₹359</p>
    <button>Add</button>
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
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet2} alt="" />
    <div className="sweet-name">PalKova</div>
    <p className='sweet-price'>₹549</p>
    <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet3} alt="" />
    <div className="sweet-name">Kaju-Kalli</div>
    <p className='sweet-price'>₹869</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet4} alt="" />
    <div className="sweet-name">Laddu</div>
    <p className='sweet-price'>₹289</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet5} alt="" />
    <div className="sweet-name">Mysore-Pak</div>
    <p className='sweet-price'>₹489</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet6} alt="" />
    <div className="sweet-name">Jelabi</div>
    <p className='sweet-price'>₹219</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet7} alt="" />
    <div className="sweet-name">RasaMalai</div>
    <p className='sweet-price'>₹359</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet8} alt="" />
    <div className="sweet-name">Halwa</div>
    <p className='sweet-price'>₹269</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet9} alt="" />
    <div className="sweet-name">Soan Papdi</div>
    <p className='sweet-price'>₹399</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet10} alt="" />
    <div className="sweet-name">Adhirasam</div>
    <p className='sweet-price'>₹449</p>
     <button className='but'>Add</button>
  </div>
  <div className="sweet-card">
    <img src={sweet11} alt="" />
    <div className="sweet-name">Badusha</div>
    <p className='sweet-price'>₹299</p>
     <button className='but'>Add</button>
  </div>
</div>
{/* Snacks Department */}

<h2 id='burger'>Snacks <GiEating /></h2>
<div className="snacks">

  <div className="snack-card">
    <img src={snack1} alt="" />
    <div className="snack-name">Donut</div>
    <p className='snack-price'>₹69</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack2} alt="" />
    <div className="snack-name">Chocolate-Brownie</div>
    <p className='snack-price'>₹89</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack3} alt="" />
    <div className="snack-name">Cup-Cake</div>
    <p className='snack-price'>₹99</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack4} alt="" />
    <div className="snack-name">Pizza</div>
    <p className='snack-price'>₹149</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack5} alt="" />
    <div className="snack-name">Waffle</div>
    <p className='snack-price'>₹59</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack6} alt="" />
    <div className="snack-name">Chocolate-Roll</div>
    <p className='snack-price'>₹99</p>
    <button className='snabut'>Add</button>
  </div>
  
  <div className="snack-card">
    <img src={snack8} alt="" />
    <div className="snack-name">Burger</div>
    <p className='snack-price'>₹89</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack9} alt="" />
    <div className="snack-name">Truffle</div>
    <p className='snack-price'>₹109</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack10} alt="" />
    <div className="snack-name">Pan Cake</div>
    <p className='snack-price'>₹79</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack11} alt="" />
    <div className="snack-name">Cookies</div>
    <p className='snack-price'>₹29</p>
    <button className='snabut'>Add</button>
  </div>
  <div className="snack-card">
    <img src={snack7} alt="" />
    <div className="snack-name">Fries</div>
    <p className='snack-price'>₹39</p>
    <button className='snabut'>Add</button>
  </div>
 
  
</div>
</div>
  );
}

export default Login;
