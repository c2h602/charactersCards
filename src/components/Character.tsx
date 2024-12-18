import { useEffect, useState } from "react";

interface ICharacter {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export default function Character() {
  //состояние для хранения персонажа
  const [characters, setCharacters] = useState<ICharacter[]>();

  const fetchData = async () => {
    const charactersResponse = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${Math. floor(Math. random() * (42 - 1 + 1)) + 1}`
    );
    const responseObject = await charactersResponse.json();
    const charactersData : ICharacter[] = responseObject.results;
    setCharacters(charactersData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {characters?.map((character) => (

        <article className="character__card" key={character.id}>

          <div className="character__img">
            <img src={character.image} alt="🖼️" />
          </div>

          <div className="character__info">
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            {character.type && <p>Type: {character.type}</p>}
            <p>Gender: {character.gender}</p>
          </div>

        </article>

      ))}
    </>
  );
}
