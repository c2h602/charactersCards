import Character from "./Character";

export default function CharactersList() {

  return (
    <>
      <h1>Rick and Morty</h1>
      <h2>Characters cards</h2>

      <article className="characters__list">
        <Character />
      </article>
    </>
  );
}
