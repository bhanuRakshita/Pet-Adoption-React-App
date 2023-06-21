const muffu = {
    name: 'Mufasa',
    type: 'Dog',
    breed: 'Husky'
}

const brownie = {
    name: 'Brownie',
    type: 'Dog',
    breed: 'toy poodle'
}

const Pet = (pet)=>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h3",{},pet.name),
        React.createElement("h5",{},pet.type),
        React.createElement("h5",{},pet.breed)]
    )
}

const App = () => {
    return React.createElement(
      "div",
      {},[
        React.createElement("h1",{},"Adopt Me!"),
        React.createElement(Pet, muffu),
        React.createElement(Pet, brownie)
      ]
    )
  };

  const container = document.querySelector("#root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));