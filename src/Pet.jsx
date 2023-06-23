//import React from "react";

// const Pet = (pet)=>{
//     return React.createElement(
//         "div",
//         {},
//         [React.createElement("h3",{},pet.name),
//         React.createElement("h5",{},pet.animal),
//         React.createElement("h5",{},pet.breed)]
//     )
// };

const Pet = (pet) => {
    return (
        <div>
            <h1>{pet.name}</h1>
            <h2>{pet.animal}</h2>
            <h2>{pet.breed}</h2>
        </div>
    );
};

export default Pet;