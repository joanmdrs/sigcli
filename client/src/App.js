import './App.css';
import React, {useState} from 'react'
import Axios from 'axios'

function App() {


  const [values, setValues] = useState();

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

    </div>
  )
}

export default App;
