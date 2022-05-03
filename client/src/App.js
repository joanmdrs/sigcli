import './App.css';
import React, {useState} from 'react'
import Axios from 'axios'
import Card from './components/card';

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
    })

    setValues([...values, {
      id: values.id,
      name: values.name,
      username: values.username,
      password: values.password
    }])
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
        <div className="form-add-recepcionist" id="form-recepcionist" data-action="new">
          <input type='text' name='id' placeholder=' Id:' className='input-id-recepcionist' id="input-id"></input>
          <input type="text"     className="input-name-recepcionist" name="name" placeholder="name" id="input-name" required onChange={handleChangeValues}/>
          <input type="text"     className="input-username-recepcionist" name="username" placeholder="username" id="input-username" required onChange={handleChangeValues} />
          <input type="password" className="input-password-recepcionist" name="password" placeholder="password" id="input-password" required onChange={handleChangeValues}/>
          <button type="submit" className="button-save-recepcionist" id="input-button" onClick={() => {handleClickButton()}}>Save</button>
        </div>
      </div>

      <div className='search-container'>
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
                <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <Card key={usernameSearch.id} listCard={usernameSearch} setListCard={setUsernameSearch} id={usernameSearch.id} name={usernameSearch.name} username={usernameSearch.username}></Card>
                </tbody>
              </table>
              </div>
          }
        </div>

        <div className="container-search-recepcionist" id="search-byId"> 
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
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Card key={usernameSearchById.id} listCard={usernameSearchById} setListCard={setUsernameSearchById} id={usernameSearchById.id} name={usernameSearchById.name} username={usernameSearchById.username}></Card>
                  </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;
