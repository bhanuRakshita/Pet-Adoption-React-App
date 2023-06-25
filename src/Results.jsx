import Pet from "./Pet";

const Results = ({pets})=>{
    return(
        <div className='search'>
            {!pets.length ? (
                <h1>NO PETS FOUND!</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                    id={Pet.id}
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    images={pet.images}
                    location={`${pet.city}, ${pet.state}`}
                    key={pet.id}
                    />
                  ))
            )}
        </div>
    );
}

export default Results;
