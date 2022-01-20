import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";


function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState({});

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
          .then(res => setUsers(res.data));
  }, []);

  const getUser = () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
          .then(res => setUsers(res.data));
  }

  const deleteUser = id =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
          .then(() => getUser());
  }

  const deselectedUser = () => setUserSelected({});


  return (
    <div className="content">
      <UsersList users={users} deleteUser={deleteUser} setUserSelected={setUserSelected} />
      <UsersForm getUser={getUser} userSelected={userSelected} deselectedUser={deselectedUser}/>
    </div>
  );
}

export default App;
