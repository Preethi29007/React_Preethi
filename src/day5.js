import React from "react";
let f=['apple','mango','cherry','star','banana','orange','strawberry','dates'];
let fp=[100,200,300,400,500,600,700,800];
// // let sliced=f.slice(4,5);
// // console.log(sliced);
// // // console.log(f);

// let f = ['apple','mango','cherry','star'];
// let fp = [100,200,300,400];
// let items = [];
// for (let i = 0; i < f.length; i++) {
//     items.push(
//         <li key={i}>
//             {f[i]} = {fp[i]} per Kg
//         </li>
//     );
// }


// // let fruits=['apple','banana','cherry','star'];
// // fruits.splice(2,4,'Mango');
// // console.log(fruits);

// // const arr=[10,20,30,40];
// // console.log(arr.shift()); //remove first element
// // console.log(arr);

// // let arr1=[1,2,3];
// // let removed=arr1.pop();//remove last element
// // console.log(removed);
// // console.log(arr1);

// // let arr3=[1,2,3];
// // let add=arr3.push(4,5);//add valuee into last element
// // console.log(arr3);

// // const arr2=[10,20,30];
// // console.log(arr2.unshift(0)); //add value into first element
// // console.log(arr2);

// // let EmptyArray=[];
// // let pushArray=EmptyArray.push(arr2);
// // console.log(EmptyArray);

function Day5() {

    return (
        <div>
            <h2>Fruit Prices</h2>
            <ul>
                {f.map((f, index) => (
                    <li key={index}>
                        {f} = {fp[index]}/KG
                    </li>
                ))}
            </ul>
        </div>
    );
    // return(
    //     <div>
    //         <ul>
    //             {items}
    //         </ul>
    //     </div>
    // )
}
export default Day5;
