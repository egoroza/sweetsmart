import React from 'react'
import Star from '../img/star.png';

function User({ match }) {

  var username = match.params.id;
  var nameArr = [];

  nameArr = username.split("-");
  var fullName = "";

  for(var i = 0; i < nameArr.length; i++){
    fullName = fullName + nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1) + " ";
  }


  return(<div className="section">
    <div className="container">
      <h1>{fullName}</h1>
      <hr />
      Here is the user's information
    </div>
  </div>);
}
export default User