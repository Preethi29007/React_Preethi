import React from "react";
function ProductCart({ state, dispatch }) {
    const products = [
        { id: 2, name: "Dairy Milk", price: 10 },
        { id: 3, name: "Ferrero Rocher", price: 240 },
    ];

    return (
        <div>
            <h2>Products</h2>
            {products.map(pro => (
                <div key={pro.id} style={{ marginBottom: 8 }}>
                    {pro.name} - ${pro.price}
                    <button
                        type="button"
                        onClick={() => {
                            console.log("ADD click", pro);
                            dispatch({ type: "ADDTOCART", product: pro });
                        }}
                        style={{ marginLeft: 8 }}
                    >
                        ADD
                    </button>
                </div>
            ))}

            <h3>Cart preview</h3>
            {state.cart.map(item => (
                <div key={item.id}>
                    {item.name} - ${item.price}
                    <button onClick={()=>dispatch({type:"REMOVE",item:item.id})}>REMOVE</button>
                </div>
            ))}
        </div>
    );
}
export default ProductCart;