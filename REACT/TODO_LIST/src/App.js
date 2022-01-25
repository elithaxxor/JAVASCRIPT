import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';

// npx json-server -p 3500 ./data/db.json
function App() {
        const API_URL = 'http://localhost:3500/items'
        const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
        const [newItem, setNewItem] = useState('');
        const [search, setSearch] = useState('');
        const [fetchError, setFetchError] = useState('');
        const [isLoading, setIsLoading] = useState('');

useEffect(()=> {
    const fetchItems = async() => {
        try {
            const response = await fetch(API_URL);
            console.log(response);
            if(!response) throw Error('Could not connect');
            const listItems = await response.json();
            console.log(listItems);
            setItems(listItems);
            setFetchError(null);
        } // set it to null incase !null before

        catch(err){
            console.log(err.stack);
            setFetchError(err.message);
        }
        finally {
            setIsLoading(false);
        }
        setTimeout(()=> {
            (async () => await fetchItems())();
        }, 2000)}}, [])


useEffect(() => {
        localStorage.setItem('shoppinglist', JSON.stringify(items));}, [items])
const addItem = async (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);
const postOptions = {
        method: 'POST',
        headers: {
                'Content-Type': 'applications/json'},
        body: JSON.stringify(myNewItem),
    }
        const result = await apiRequest(API_URL, postOptions);
        if (result) setFetchError(result);
}

const handleCheck = async (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        const myItem = listItems.filter(item => item.id === id);
        const updateOptions = {
                method: 'PATCH',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({ checked: myItem.checked })
        }; 
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result); 
        console.log(result);
  }
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
      const myItem = listItems.filter(item => item.id === id);

      const updateOptions = {
        method: 'PATCH',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({ checked: myItem.checked })
}; 
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result); 
        console.log(result);
}


const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
  }
useEffect(()=> 
        console.log('useEffect log'));
useEffect(()=> 
        console.log('useEffect on load'),[]);

// everytime a page is loaded, use effect will check connection and set items. 
// use effect to connect to db, check request and display err msg on DOM/CON


  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main> 
        {isLoading && <p> Loading Items.. </p>}
        {fetchError && <p style={{color: "red"}} > {`Error ${fetchError}`} </p> },

        {!fetchError && !isLoading && 
       
       <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
        /> }

      </main> 
      <Footer length={items.length} />
    </div>
  )}

export default App;
