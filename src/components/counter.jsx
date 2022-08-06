import React,{useState} from 'react';
import api from '../api/index'
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [counter, setCounter] = useState(users.length);

  const badgeColor = (color) => {
    return `m-1 badge bg-${color}`
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user._id !== id));
    setCounter(counter - 1);
  }
  return (
  <><h2>{counter}</h2>
  <table class="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качество</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map(qualiti => {
                  return (
                    <span className={badgeColor(qualiti.color)}>{qualiti.name}</span>
                  );
                })}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  onClick={() => deleteUser(user._id)}
                  className='btn btn-danger'
                >delete</button>
              </td>
            </tr>);
        })}
      </tbody>
    </table></>)
}

export default Users;
