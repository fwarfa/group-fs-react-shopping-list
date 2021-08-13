import {useState} from 'react';
import GroupControls from '../GroupControls/GroupControls';

function ShoppingList ({ deleteAll, resetAll, shoppingList }) {

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
                        <li key= {item.id}>{item.name} {item.quantity} {item.unit}</li>
                    )
                })}

            </ul>

        </>
    );
}

export default ShoppingList;