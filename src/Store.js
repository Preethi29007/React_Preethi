import React from 'react';
import { Link,Route,Routes } from 'react-router-dom';
import BuyNow from './BuyNow';
const Store = () => {
  return (
    <>
        <h1>This is store page</h1>
        <nav>
          <Link to="buynow"><li>BUY NOW</li></Link>
        </nav>
        <Routes>
          <Route path="buynow" element={<BuyNow/>}/>
        </Routes>
    </>
  )
}
export default Store;