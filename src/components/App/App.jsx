// src/App.jsx
import { FaBeer } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

import AppBar from '../AppBar/AppBar';
import {Product} from '../product/product';
import officers  from '../../officers.json'
// console.log(officers);
import OfficerList from './OfficerList/OfficerList';

import css from "./App.module.css"

const Box = ({children}) => {
  return (
    <div>
      <p>This is box</p>
      {children}
    </div>
  )
}
const Section = ({title, children}) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  const isModalOpen = true;
  return (
    <div className={css.container}>
      <AppBar/>
      <h1>Best selling
        <h3>
      Lets go for a <FaBeer  size={40}/>
    </h3>
    </h1>
    <div>
<AiFillApple size={50} className={css.icon}/>
    </div>
<div>
  {isModalOpen ? <h2> Midal is open</h2> :  <h2>Modal closed</h2>}
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
      <div className="containerA">
      <Box> 
        <h3>Hi Childrens!</h3>
      </Box>
      </div>
      <div className={css.section}>
    <Section title="Hi!"><p>Your message</p> </Section>
      <Section title="Hola!"> <p>Tu mensaje</p></Section>
      <Section  title="Привіт!"> <ul>
        <li>Твоє повідомлення</li>
      <li>Ваші слова</li>
      <li>Пес Патрон</li>
      </ul></Section>
      </div>

      </div>
    );
}




