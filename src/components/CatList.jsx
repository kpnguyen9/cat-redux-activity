import React from "react";
import { connect } from "react-redux";

const CatList = ({ cats }) => {
  const catsArray = Object.keys(cats);

  return (
    <ul>
      {catsArray.map((catId, index) => {
        return (
          <li key={catId}>
            {cats[catId].name} is {cats[catId].activity}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(CatList);
