import React from 'react';
import "./App.css";
import {useSelector} from 'react-redux';


function Home(){
  
    const items = useSelector(state => state.add)

    return(
        <div class = "DisplayItems">
            <h2>All Items</h2>
            <div class = "HomeItems">
            {items.map((value)=>{return(
             <div class = "card">
                <h3>{value.model}</h3>
                <h3>{value.category}</h3>
                <h3>Description</h3>
              </div>
            )})}
            </div>
        </div>
    )
}

export default Home;