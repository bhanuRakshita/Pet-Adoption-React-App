import {useState} from 'react';
const ANIMALS = ["bird","cat","dog", "reptile", "rabbit"];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle,WA");
    const [animal, setAnimal] =useState("");
    const [breed, setBreed] = useState("");
    const breeds = [];

    return (
        <div>
            <form>
                <label htmlFor="location">
                    location
                    <input onChange={e=>setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                        }}
                        onBlur={(e) => {
                        setAnimal(e.target.value);
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                Breed
                <select
                    disabled={!breeds.length}
                    id="breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    onBlur={(e) => setBreed(e.target.value)}
                >
                    <option />
                    {breeds.map((breed) => (
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                    ))}
                </select>
                </label>



                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;