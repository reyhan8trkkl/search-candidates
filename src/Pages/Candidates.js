import axios from "axios";
import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userDet from "../actions/userDetAction";

export const Candidates = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [foundUsers, setFoundUsers] = useState([]);

  const getData = () => {
    axios.get("https://users-datas.herokuapp.com/users").then((res) =>
      setUsers(
        res.data.sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      )
    );
  };
  useEffect(() => getData());

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const sortres = users.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      const results = sortres.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(users);
    }
    setName(keyword);
  };
  return (
    <div className="container">
      <div>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="inputSearch"
          placeholder="Filter Candidates..."
          style={{ height: "25px" }}
        />
      </div>
      <div className="user-list item">
        <tr>
          <th>Name</th>
          <th>Phone</th>
        </tr>
        {foundUsers.length > 0
          ? foundUsers.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <Link to="/details">
                  <button
                    onClick={() => {
                      dispatch(userDet([
                        item.name,
                        item.email,
                        item.username,
                        item.website,
                        item.company,
                        item.address,
                        item.phone
                      ]));
                    }}
                  >
                    Details
                  </button>
                </Link>
              </tr>
            ))
          : users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <Link to="/details">
                  <button
                    onClick={() => {
                      dispatch(
                        userDet([
                          item.name,
                          item.email,
                          item.username,
                          item.website,
                          item.company,
                          item.address,
                          item.phone
                        ])
                      );
                    }}
                  >
                    Details
                  </button>
                </Link>
              </tr>
            ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};
export default connect(mapStateToProps)(Candidates);
