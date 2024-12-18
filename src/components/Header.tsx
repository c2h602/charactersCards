import Button from "./Button";
import SelectDropdown from "./SelectDropdown";

export default function Header() {
  function handleReloadPage() {
    location.reload();
  }
  return (
    <>
      <div className="title">
        <h1>Rick and Morty</h1>
        <h2>Characters cards</h2>
      </div>

      <div className="action__panel">
        <SelectDropdown />
        <Button className="reloadBtn" onClick={handleReloadPage}>
          ⟳
        </Button>
      </div>
    </>
  );
}
