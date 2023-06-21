import React from "react";

const Pet = (pet)=>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h3",{},pet.name),
        React.createElement("h5",{},pet.type),
        React.createElement("h5",{},pet.breed)]
    )
};

export default Pet;