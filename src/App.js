import React,{useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName,uAge,uCollege) => {
    console.log(uName,uAge)
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge,college: uCollege, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
