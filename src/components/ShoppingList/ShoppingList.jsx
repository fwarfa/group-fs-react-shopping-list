import {useState} from 'react';
import GroupControls from '../GroupControls/GroupControls';

function ShoppingList({ deleteAll, resetAll, shoppingList, buyButton }) {
    
    //create a variable id & SetID. Have it equal it to the useState
    let [id , setID] = useState('')

    //create a function to pass through buyButton
    //pass through ID into function
    function setBuyButton (id){
        buyButton(id)
        console.log('logging id', id);
    }
    return (
        <>
            <h1>Shopping List</h1>
            <GroupControls 
                deleteAll = { deleteAll }
                resetAll = { resetAll }
            />
            <ul>
                {shoppingList.map(item => {
                    return (
                        //Set the key in the li to call the item.id
                        //in order to run onClick run a function with a function with the id
                        <li key= {item.id}>{item.name} {item.quantity} {item.unit}
                            <button onClick={() => {setBuyButton(item.id)}}>Buy</button>
                            <button >remove</button>
                        </li>
                        
                    )
                })}

            </ul>

        </>
    );
}

export default ShoppingList;