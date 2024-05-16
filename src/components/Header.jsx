import Filter from "./Filter"

const Header = ({handleSelect}) => {
  return (
    <header>
        <h1>Mis Clubs</h1>
        <Filter handleSelect={handleSelect} />
    </header>

  )
}

export default Header