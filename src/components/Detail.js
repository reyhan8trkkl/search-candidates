import React from "react";
import { connect } from "react-redux";

export const Detail = (props) => {
  return (
    <div className="detList">
      <ul>
        <li >Name:{props.users[0]} </li>
        <li>Email:{props.users[1]}</li>
        <li>UserName:{props.users[2]} </li>
        <li>Website:{props.users[3]}</li>
        <li>Company:{props.users[4]} </li>
        <li>Address:{props.users[5]}</li>
        <li>Phone:{props.users[6]} </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.detUs,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps)(Detail);
