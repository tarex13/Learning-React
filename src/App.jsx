//import Greet from './Greet.jsx'

import { FaCartArrowDown } from "react-icons/fa";
import Children from "./components/Children"
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
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
import './index.css'
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
/*
function App (){
  const ValidPassword = () => <h1>Valid Password</h1>;
  const InvalidPassword = () => <h1>Invalid Password</h1>;

  const Password = ({isValid}) => {
    return isValid ? <ValidPassword /> : <InvalidPassword />;

  };
  //const numbers = [{a:1,b:2,c:3}, {a:2,b:3}];
  return <main>
    { <WelcomeMessage />
    <Header />
    <MainContent />
    <Footer />
    <JSXRules /> 
    <Greeting />
    <ProductInfo />

  {numbers.map(index => (
    {index.a}  <br />))}
  
  <UserList />
  <Person name="John" age={19}/>
  <Product name="Apple" price={1500} />
  <Children>
    <div>
      <label>Hello World</label>
      </div>
    
  </Children>
  <Children>
    <div>
      <label>Hello World</label>
      </div>
    
  </Children>
  <Children>
    <div>
      <label>Hello World</label>
      </div>
    
  </Children>
<Password isValid={false} />}
<Weather temperature={15}/>
<h1><UserStatus isAdmin={true} loggedIn={true} /></h1>

  </main>;
}

const App = () => {

  //const styles = { color: "white", backgroundColor:"teal", padding:"2rem" };

  return <section>
    <h1 style={{color: 'black'}}>Inline Style</h1>Double brackets required
    <FaCartArrowDown />
  </section>
    <StyledCard />
    <ProfileCard />
    <IconComponent />
}



const Copy = () => {
  const copyHandler = () => {
    console.log("Stop Stealing My content")
  }
  return (
    <p onCopy={copyHandler}>
      lodododod
    </p>
  )
}

const Button = () => {
  const click = () => {
    console.log("Hello")
  }
  return <button onClick={click}>Click Me</button>
}

const Move = () => {
  const moveHandler = () => {
    alert("Mouse moved");
    console.log("Mouse moved");
  }
  return (
  <p onMouseMove={moveHandler}>Lorem 20</p>
)
}
*/

import { useState } from "react";

/*const App = () => {
   const [count, setCount] = useState(0);
  const increment = () => setCount(count+1);//Changing value using setCount or setWhatever changes the re render the application but using just (count+1) does not
  const decrement = () => setCount(count-1);
 // console.log(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
) */
/*const [friends, setFriends] = useState(['Alex', 'John'])

const addOneFriend = () => setFriends([...friends, "Alex"])
const removeFriend = () => setFriends(friends.filter(f => f != "Tara"))
const updateOneFriend = () => setFriends(friends.map(f => f == 'Alex' ? 'Mex' : f))
return (
<div>
  {friends.map((f) => (
    <li key={Math.random()}>{f}</li>
  ))}
  <button onClick={addOneFriend}>Add New Friend</button>
  <button onClick={removeFriend}>Remove One Friend</button>
  <button onClick={updateOneFriend}>Update One Friend</button>
</div>)
}
*/


// const App = () => {
//   const [movie, setMovie] = useState({
//     title: 'Equalizer 3',
//     ratings: 7,

//   })
//   const handleClick = () => {
//     // const copyMovie = {
//     //   ...movie,
//     //   ratings: 5
//     // }
//     setMovie({...movie, ratings: 5})
//   }
//   return (
//   <section>
//     <h1>{movie.title}</h1>
//     <h2>{movie.ratings}</h2>
//     <button onClick={handleClick}>Change Rating</button>
//   </section>
//     )
// }

// const App = () => {
//   const [movies, setMovies] = useState([
//     {id: 1, title: 'Spider Name', ratings: 3},
//     {id: 2, title: 'John Doe', ratings: 4},
//     {id: 3, title: 'Spider NIG', ratings: 5},
//   ])
//   const handleClick = () => {
//     setMovies(movies.map(m => m.id == 1 ? {...movies, title: "John Cena", ratings: 1} : m))
//   }
//   return (
//     <section>
//       {movies.map((f) => (
//         <ul key={f.id}>
//           <li>{f.title}</li>
//           <li>{f.ratings}</li>
//         </ul>
//       ))}
//       <button onClick={handleClick}>Hello</button>
//     </section>
//   )
// }
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExampleOne from "./components/ExampleTwo";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <section>
//     <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
//     <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)}/>
//     </section>
//   )
// }

const App = () => {
  return (
    <div>
      <h1><ExampleThree /></h1>
      
    </div>
  )
}


export default App;
