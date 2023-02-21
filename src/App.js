import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();

  // const [listUser, setListUser] = useState([]);

  const listUser = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  // const fetchAllUsers = async () => {
  //   const res = await axios.get('http://localhost:8080/users/all');
  //   console.log('check res', res.data);
  //   setListUser(res.data)
  // }

  if (isError) {
    return (
      <>
        <div>some things wrong</div>
      </>
    );
  } else {
    if (isLoading) {
      return (
        <>
          <div>Loading data ...</div>
        </>
      );
    } else {
      return (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>User Name</th>
              </tr>
            </thead>
          </table>
          <tbody>
            {listUser.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                </tr>
              );
            })}
          </tbody>
        </>
      );
    }
  }
}

export default App;
