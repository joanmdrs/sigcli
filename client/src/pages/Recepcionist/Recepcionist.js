import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerRecepcionist} from "../../components/Container/Container";
import { Box as BoxRecepcionist } from "../../components/Box/Box";
import { Header as HeaderRecepcionist} from "../../components/Header/Header"
import { FormRecepcionist } from "../../components/Forms /FormRecepcionist/FormRecepcionist";
import Swal from 'sweetalert2';

export default function Recepcionist() {

  return (
    <ContainerRecepcionist>
        <Nav />
        <BoxRecepcionist>

            <HeaderRecepcionist
              title="Recepcionist" 
              text="Recepcionist registration: Include, Search, Change, Delete and List" 
              icon="user-gear"
            ></HeaderRecepcionist>
            <FormRecepcionist />
        </BoxRecepcionist> 
    </ContainerRecepcionist>
)
}
// function Recepcionist() {
//   const [values, setValues] = useState();
//   const [usernameSearch, setUsernameSearch] = useState(null);
//   const [usernameSearchById, setUsernameSearchById] = useState(null);

//   const handleChangeValues = (value) => {
//     setValues((prevValue) => ({
//       ...prevValue,
//       [value.target.name]: value.target.value,
//       [value.target.username]: value.target.username,
//       [value.target.password]: value.target.password,
//     }));
//   };

//   const handleClickButton = () => {
//     if (document.getElementById("form-recepcionist").dataset.action === "new") {
//       handleSaveButton();
//     } else {
//       handleUpdateButton();
//     }
//   };

//   const handleSaveButton = async () => {
//     api.post("/recepcionist/register", {
//       name: values.name,
//       username: values.username,
//       password: values.password,
//     });

//     setValues([
//       ...values,
//       {
//         id: values.id,
//         name: values.name,
//         username: values.username,
//         password: values.password,
//       },
//     ]);
//   };

//   const handleUpdateButton = async () => {
//     const id = document.getElementById("input-id").value;
//     const name = document.getElementById("input-name").value;
//     const username = document.getElementById("input-username").value;
//     const password = document.getElementById("input-password").value;

//     api.put("/recepcionist/update", {
//       id: id,
//       name: name,
//       username: username,
//       password: password,
//     }).then((response) => {
//       console.log(response);
//     });
//   };

//   const getUserByUsername = () => {
//     const searchUsername = document.getElementById("input-get-username").value
//     api.get(`/recepcionist/get/user/${searchUsername}`,
//     {
//       username: searchUsername,
//     }).then((response) => {
//       if (response === 'null'){
//         setUsernameSearch([]);
//       } else {
//         setUsernameSearch(response.data);
//       }
//     });
//   };

//   const getUserById = () => {
//     const searchId = document.getElementById("input-get-id").value
//     api.get(`/recepcionist/get/${searchId}`,
//     {
//       username: searchId,
//     }).then((response) => {
//       if (response === "null") {
//         setUsernameSearchById([]);
//       } else {
//         setUsernameSearchById(response.data);
//       }
//     });
//   };

//   return (
//     <div className="App">
//       <div className="container-add-recepcionist">
//         <h1>Add Recepcionist ...</h1>
//         <div
//           className="form-add-recepcionist"
//           id="form-recepcionist"
//           data-action="new"
//         >
//           <input
//             type="text"
//             name="id"
//             placeholder=" id"
//             className="input-id-recepcionist"
//             id="input-id"
//           ></input>
//           <input
//             type="text"
//             className="input-name-recepcionist"
//             name="name"
//             placeholder="name"
//             id="input-name"
//             required
//             onChange={handleChangeValues}
//           />
//           <input
//             type="text"
//             className="input-username-recepcionist"
//             name="username"
//             placeholder="username"
//             id="input-username"
//             required
//             onChange={handleChangeValues}
//           />
//           <input
//             type="password"
//             className="input-password-recepcionist"
//             name="password"
//             placeholder="password"
//             id="input-password"
//             required
//             onChange={handleChangeValues}
//           />
//           <button
//             type="submit"
//             className="button-save-recepcionist"
//             id="input-button"
//             onClick={() => {
//               handleClickButton();
//             }}
//           >
//             Save
//           </button>
//         </div>
//       </div>

//       <div className="search-container">
//         <div className="container-search-recepcionist">
//           <div className="form-search-recepcionist">
//             <label htmlFor="getUser" className="label-get">
//               Get user by username
//             </label>
//             <input
//               type="text"
//               name="getUser"
//               placeholder="get user"
//               id="input-get-username"
//               >
//             </input>

//             <button onClick={getUserByUsername}>Search</button>
//           </div>

//           {/* user searched */}
//           {usernameSearch == null ? (
//             ""
//           ) : (
//             <div>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <Card
//                     key={usernameSearch.id}
//                     listCard={usernameSearch}
//                     setListCard={setUsernameSearch}
//                     id={usernameSearch.id}
//                     name={usernameSearch.name}
//                     username={usernameSearch.username}
//                   ></Card>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>

//         <div className="container-search-recepcionist" id="search-byId">
//           <div className="form-search-recepcionist">
//             <label htmlFor="getUser" className="label-get">
//               Get user by id
//             </label>
//             <input
//               type="number"
//               name="getUser"
//               placeholder="get user by id"
//               id="input-get-id">
//             </input>
//             <button onClick={getUserById}>Search</button>
//           </div>

//           {/* user searched */}
//           {usernameSearchById == null ? (
//             ""
//           ) : (
//             <div>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <Card
//                     key={usernameSearchById.id}
//                     listCard={usernameSearchById}
//                     setListCard={setUsernameSearchById}
//                     id={usernameSearchById.id}
//                     name={usernameSearchById.name}
//                     username={usernameSearchById.username}
//                   ></Card>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Recepcionist;

// export const handleDeleteButton = async (id) => {
//   api.delete(`/recepcionist/${id}`);
// };