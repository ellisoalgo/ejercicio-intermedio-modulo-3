import Filter from "./Filter"

const Header = ({handleSelect}) => {
  return (
    <header className="header">
        <h1 className="header__title">Mis Clubs</h1>
        <Filter handleSelect={handleSelect} />
    </header>

  )
}

export default Header