import React from 'react';
import AddItem from '../AddItem/AddItem'
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';



function App() {

    const postItem = (newItem) => {
        console.log('in postItem. newItem is', newItem)
    
    
        // POST the creature to our server
        axios({
          method: 'POST',
          url: '/list',
          data: newItem
        }).then(response => {
          console.log('POST /list', response);
    
        //   fetchItem(); 
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
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
