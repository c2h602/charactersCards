export default function SelectDropdown() {
  return (
    <>
      <label>
        Sort by status:
        <select name="status">
          <option value="dead">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">unknown</option>
        </select>
      </label>

      <label>
        Sort by gender:
        <select name="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </label>
    </>
  );
}
