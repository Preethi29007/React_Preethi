// // import  Header  from './Header';
// // import MainContent from './MainContent';
// // import Footer from './Footer';
// import { createContext,useState } from 'react';
// import ChildA from './ChildA';
// import Header from './Header';
// export const UserContext=createContext();
// //import SimpleLogin from './RegisterForm';
// // import RegistrationForm  from './loginpage';
// function App(){
//       const [userName]=useState({
//           col1:"store",
//           col2:"ipad",
//      });
      

//      return (<>
//       {/* <Header/>
//       <MainContent/>
//       <Footer/> */}
//       <UserContext.Provider value={userName}>
           
//             <ChildA/>
//             <Header/>
//       </UserContext.Provider>
//       {/* <RegistrationForm/> */}
//       </>
//       );
// }
// export default App;

// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import Header from './Header';
// import {createContext,useState} from 'react';
// import ChildA from "./ChildA"; 
// import useCounter from './useCounter';  
// import ChildB from './ChildB';

// export const UserContext = createContext();
// function App() {

//   const[userName,setUserName]=useState({
//     col1: "preethi",
//     col2: "store",
//     theme:1,
//   });
  
//   return (
//     <div>
//       <UserContext.Provider value={userName}>
       
//        <ChildA/>
//        <ChildB/>
//        <button onClick={()=>setUserName(prev=>({
//             ...prev,
//             theme:!prev.theme
//        }))}>Change</button>
//       </UserContext.Provider>
      
//     </div>
//   );
// }





// import Header1 from './Header1';
// import MainContent from './MainContent';
// import Footer from './Footer';
// function App(){
//   return(
//     <>
//     <Header1/>
//     <MainContent/>
//     <Footer/>
//     </>
//   )
// }

// export default App;


import ProductCart from './Product/ProductCart';
import Cart from './Product/Cart';
import './index.css';
import {Provider} from 'react-redux';
import { store } from './storeRedux';
import ChildrenForRedux from './ChildrenForRedux';
//import Header from './Header';
function App(){
  return(
    <>
<div className={1 && 'dark'}>
    {/* <Header/> */}
    <Provider store={store}>
    {/* <ProductCart/>
      <Cart/> */}
      <ChildrenForRedux />
    </Provider>
    </div>
    </>
  )
}

export default App;

// import React from "react";
// import UserCard from "./Test/UserCard"; // adjust path if needed

// function App() {
//   const users = [
//     { name: "Rose", email: "rose@gmail.com", age: 25 },
//     { name: "Mary", email: "mary@gmail.com", age: 35 },
//     { name: "Jonnah", email: "jonnah@gmail.com", age: 32 },
//   ];

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//       {users.map((user, index) => (
//         <UserCard 
//           key={index} 
//           name={user.name} 
//           email={user.email} 
//           age={user.age} 
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import UserCard from "./Test/UserCard"; // adjust path if needed

// function App() {
//   const users = [
//     { name: "Rose", email: "rose@gmail.com", age: 25 },
//     { name: "Mary", email: "mary@gmail.com", age: 35 },
//     { name: "Jonnah", email: "jonnah@gmail.com", age: 32 },
//   ];

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//       {users.map((user, index) => (
//         <UserCard 
//           key={index} 
//           name={user.name} 
//           email={user.email} 
//           age={user.age} 
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import UserCard from "./Test/UserCard"; // adjust path if needed

// function App() {
//   const users = [
//     { name: "Rose", email: "rose@gmail.com", age: 25 },
//     { name: "Mary", email: "mary@gmail.com", age: 35 },
//     { name: "Jonnah", email: "jonnah@gmail.com", age: 32 },
//   ];

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//       {users.map((user, index) => (
//         <UserCard 
//           key={index} 
//           name={user.name} 
//           email={user.email} 
//           age={user.age} 
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import UserCard from "./Test/UserCard"; // adjust path if needed

// function App() {
//   const users = [
//     { name: "Rose", email: "rose@gmail.com", age: 25 },
//     { name: "Mary", email: "mary@gmail.com", age: 35 },
//     { name: "Jonnah", email: "jonnah@gmail.com", age: 32 },
//   ];

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//       {users.map((user, index) => (
//         <UserCard 
//           key={index} 
//           name={user.name} 
//           email={user.email} 
//           age={user.age} 
//         />
//       ))}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import Time from "./Test/Time";
// function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const themeStyles = {
//     light: {
//       backgroundColor: "#f9f9f9",
//       color: "#222",
//     },
//     dark: {
//       backgroundColor: "#222",
//       color: "#f9f9f9",
//     },
//   };

//   return (
    
//     <div
//       style={{
//         ...themeStyles[theme],
//         minHeight: "100vh",
//         padding: "20px",
//       }}>
//       <button
//         onClick={toggleTheme}
//         style={{
//           padding: "8px 16px",
//           marginBottom: "20px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Switch to {theme === "light" ? "Dark" : "Light"} Theme
//       </button>


//       <Time/>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { AuthProvider, Navbar, Dashboard } from './Test/UserAuth';

// function App() {
//   return (
//     <AuthProvider>
//       <Navbar />
//       <Dashboard />
//     </AuthProvider>
//   );
// }

// export default App;

// import React from "react";
// import AmountManager from "./Test/AmountManager";

// function App() {
//   return (
//     <div>
//       <h2>Amount Manager</h2>
//       <AmountManager />
//     </div>
//   );
// }

// export default App;

// import React, { Suspense, lazy } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";

// const About = lazy(() => import("./About"));
// const Contact = lazy(() => import("./Contact"));

// function App() {
//   return (
//     <div>
//       {/* Navigation */}
//       <nav style={{ marginBottom: "20px" }}>
//         <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
//         <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <Suspense fallback={<h3>Loading page...</h3>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

// export default App;
