import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header header_align_center">
      {/* Если картинка не отобразится, поменять путь на обычный */}
      <img className="logo" src={logo} alt="логотип шапки сайта" />
    </header>     
  )
}


export default Header;