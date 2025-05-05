//import Greet from './Greet.jsx'

import Greet from "./components/Add";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import { UserList } from "./components/UserList";
import WelcomeMessage from "./components/WelcomeMessage";

function App (){
  //const numbers = [{a:1,b:2,c:3}, {a:2,b:3}];
  return <main>
    {/* <WelcomeMessage />
    <Header />
    <MainContent />
    <Footer />
    <JSXRules /> 
    <Greeting />
    <ProductInfo />

  {numbers.map(index => (
    {index.a}  <br />))}
  
  <UserList />*/}
  <Person name="John" age={19}/>
  <Product name="Apple" price={1500} />
  </main>;
}

export default App;
