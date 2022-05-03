import './App.css';
import React, {useState} from 'react'
import Axios from 'axios'

function App() {


  const [values, setValues] = useState();
  const [usernameSearch, setUsernameSearch] = useState([]);
  const [usernameSearchById, setUsernameSearchById] = useState([]);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
      [value.target.username]: value.target.username,
      [value.target.password]: value.target.password
    }));
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      username: values.username,
      password: values.password
    }).then((response) => {
      console.log(response);
    });
  }

  const getUserByUsername = () => {
    Axios.get(`http://localhost:3001/get/user/${usernameSearch}`,
    {
      username: usernameSearch,
    }).then((response) => {
      setUsernameSearch(response.data);
    });
  }

  const getUserById = () => {
    Axios.get(`http://localhost:3001/get/${usernameSearchById}`,
    {
      username: usernameSearchById,
    }).then((response) => {
      setUsernameSearchById(response.data);
    });
  }


  return (
    <div className="App">
      <div className="container-add-recepcionist"> 
        <h1>Add Recepcionist ...</h1>
        <div className="form-add-recepcionist">
          <input type="text"     className="input-name-recepcionist" name="name" placeholder="name" required onChange={handleChangeValues}/>
          <input type="text"     className="input-username-recepcionist" name="username" placeholder="username" required onChange={handleChangeValues} />
          <input type="password" className="input-password-recepcionist" name="password" placeholder="passoword" required onChange={handleChangeValues}/>
          <button type="submit" className="button-save-recepcionist" onClick={() => {handleClickButton()}}>Save</button>
        </div>
      </div>

      <div className="container-search-recepcionist"> 
        <div className="form-search-recepcionist"> 
          <label htmlFor="getUser">Get user by username</label>
          <input 
            type="text"
            name="getUser"
            placeholder="get user"
            onChange={
              (e) => {
                setUsernameSearch(e.target.value);
              }}>
          </input>
          <button onClick={getUserByUsername}>Buscar</button>
        </div>

        {/* user searched */}
        {usernameSearch.name == null
          ? ''
          : <div>
              <p>Name: {usernameSearch.name}</p>
              <p>Id: {usernameSearch.id}</p>
              <p>Username: {usernameSearch.username}</p>
            </div>
        }
      </div>

      <div className="container-search-recepcionist"> 
        <div className="form-search-recepcionist"> 
          <label htmlFor="getUser">Get user by id</label>
          <input 
            type="number"
            name="getUser"
            placeholder="get user by id"
            onChange={
              (e) => {
                setUsernameSearchById(e.target.value);
              }}>
          </input>
          <button onClick={getUserById}>Buscar</button>
        </div>

        {/* user searched */}
        {usernameSearchById.name == null
          ? ''
          : <div>
              <p>Name: {usernameSearchById.name}</p>
              <p>Id: {usernameSearchById.id}</p>
              <p>Username: {usernameSearchById.username}</p>
            </div>
        }
      </div>
    </div>
  )
}

export default App;
