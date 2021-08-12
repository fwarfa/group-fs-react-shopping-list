import {useState} from 'react';

function ShoppingList ({shoppingList}) {

    return (
        <>
            <ul>
                {shoppingList.map(item => {
                    return (
                        <li>{item.name} {item.quantity} {item.unit}</li>
                    )
                })}

            </ul>

        </>
    );
}

export default ShoppingList;