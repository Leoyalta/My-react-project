// src/App.jsx
import AppBar from '../AppBar/AppBar';
import {Product} from '../product/product';
import officers  from '../../officers.json'
console.log(officers);
import OfficerList from './OfficerList/OfficerList';


// src/components/App.js

export default function App() {
  const isModalOpen = true;
  return (
    <div>
      <AppBar/>
      <h1>Best selling</h1>
<div>
  {isModalOpen ? <h2> Midal is open</h2> :  <h2>Modal closed</h2>}
  {/* <h2>{2 < 1 ?'Modal is open' : 'Modal closed' }</h2> */}
  {isModalOpen && <h2> Midal is open</h2>}
 
</div>
      <div>
<Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      </div>
      {/* <div>
        <OfficersProfile officer = {firstPilot} />
        <OfficersProfile officer = {secondPilot} />
      </div> */}
      
      <div>
        <ul>{[1,2,3].map((item, index) => <li key={index} > {item}</li>)}</ul>
      </div>
{/* 
      <div>
        <ul>
          {officers.map((item) => (
         <li key={item.id}>
          <OfficersProfile officer = {item}/>

         </li>
          ))}
        </ul>
      </div> */}
      <div>
        <OfficerList items={officers}/>
      </div>
      </div>
    );
}




