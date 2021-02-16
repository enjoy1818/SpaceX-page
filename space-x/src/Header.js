
import React, { useState, setState } from 'react'
function Header() {
    const [count, setCount] = useState(0);
    const [dataCollection, setData ] = useState(0);
    const axios = require('axios');
    const itemCounts = axios.get('https://api.spacexdata.com/v3/landpads')
    var items = Promise.resolve(itemCounts);
    items.then(function (item) {
        console.log(item[0])
    })
    return (
        <div>
            <h1>You clicked {} times</h1>
            <h1>{dataCollection}</h1>
            <input onInput={(data) => console.log(data)}></input>
        </div>
    );
}
export default Header;