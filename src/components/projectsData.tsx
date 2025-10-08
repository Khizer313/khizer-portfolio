import storeonImg from "../assets/images/storeon-app.png";
import shoeImg from '../assets/images/shoes-app.png'
import portfolio from '../assets/images/portfolio-app.png'
import store from '../assets/images/huge-store-app.png'
import pos from '../assets/images/pos-app.png'


const projects = [
  {
    id: 1,
    name: "Full Stack Ecom Store",
    image: storeonImg, // string ki jagah import use karo
    link: "https://storeon.vercel.app" // ↓ neeche explain hai
  },
  {
    id: 2,
    name: "A Shoes Brand Site",
    image: shoeImg,
    link: "https://brandshoe.netlify.app/"
  },
  {
    id: 3,
    name: "A Huge Online Store",
    image: store,
    link: "https://react-js-online-store-app.netlify.app/"
  },
  {
    id: 4,
    name: "A Portfolio Website",
    image: portfolio,
    link: "https://khizerabbas.netlify.app/"
  },
  {
    id: 5,
    name: "POS Inventory Management System(Under Construction)",
    image: pos,
    link: "https://github.com/Khizer313/khizer-portfolio.git"
  },

];

export default projects;