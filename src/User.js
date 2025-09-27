import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
    const{id}=useParams();
  return (
        <>
        <br/>
        {id==16 &&
        <div><img src = "https://www.gizmochina.com/wp-content/uploads/2018/02/apple_mlmv2ll_a_9_7_ipad_pro_128gb_1241265.jpg" width="400" height="400"/>
        <h1>Ipad pro</h1></div>
        }
        {id==17 &&
        <div><img src = "https://ilounge.ua/files/uploads/new_4/ipad-pro-max-15-data-vyhoda-5.jpg" width="400" height="400"/>
        <h1>Ipad pro max</h1></div>
        }
        </>
  )
}
export default User;