import Navlink from '@/components/nav-link/nav-link';
import './style.scss';
import {NavigationList} from '@/components/navbar/navigationList';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <h2 className="h3 mb-0">Каталог</h2>
      <nav className="navbar">
        {NavigationList.map(link => <Navlink path={link.path} name={link.name}></Navlink>)}
      </nav>
    </div>
  )
}