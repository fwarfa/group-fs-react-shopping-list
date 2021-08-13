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
            console.log('GET /list error', error);
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

    const deleteAll = () => {
        axios.delete('/list/all')
          .then(response => {
            console.log('Delete /list/all', response.data);
            fetchItems();
          }).catch(error => {
            console.log('DELETE /list/all error', error);
          });
    };

    const resetAll = () => {
        axios.put('/list/reset-all')
          .then(response => {
            console.log('PUT /reset-all', response.data);
            fetchItems();
          }).catch(error => {
            console.log('PUT /reset-all error', error);
          });
    };
    const buyButton = (id) => {
      axios.put(`/list/buy-button/${id}`)
        .then(response => {
          console.log('PUT /buy-button', response.data);
          fetchItems();
        }).catch(error => {
          console.log('PUT /buy-button error', error);
        });
    };

    const removeButton = () => {
      axios.delete(`/list/single/${id}`)
        .then(response => {
          console.log('PUT /single', response.data);
          fetchItems();
        }).catch(error => {
          console.log('PUT /single error', error);
        });



    return (
        <div className="App">
            <Header />
            <AddItem 
                onCreateItem={postItem}
            />
            <ShoppingList 
                deleteAll = { deleteAll }
                resetAll = { resetAll }
                shoppingList = {shoppingList}
                buyButton={buyButton}
                removeButton= {removeButton}
            />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
