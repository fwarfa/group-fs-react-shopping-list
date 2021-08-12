import React from 'react';
import AddItem from '../AddItem/AddItem'
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        fetchItems();
      }, []);

    const fetchItems = () => {
        axios.get('/list')
          .then(response => {
            console.log('GET /list', response.data);
    
            setShoppingList(response.data);
          }).catch(error => {
            console.log('GET /creature error', error);
          });
      };

    const postItem = (newItem) => {
    console.log('in postItem. newItem is', newItem)
    
    
    // POST the creature to our server
    axios({
        method: 'POST',
        url: '/list',
        data: newItem
    }).then(response => {
        console.log('POST /list', response);

      fetchItems(); 
    }).catch(error => {
        console.log('POST /list failed', error);
    })
}

    return (
        <div className="App">
            <Header />
            <AddItem 
                onCreateItem={postItem}
            />
            <ShoppingList 
                
                shoppingList = {shoppingList}
            />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
