import { useState } from "react";
import Logo from "../Data-display/Logo";
import Menu from "../Navigation/Menu";

function Header(props) {

  const [ showMenu, setSwhoMenu ] = useState( false );

  return (
    <header className="bg-blue-300">
      <div className="container mx-auto flex md:flex-col items-center justify-between py-4">

      <div>
        <Logo />
      </div>

      <div className="hidden md:block">
        <Menu />
      </div>

      <button className="md:hidden"
        onClick={ () => setSwhoMenu( !showMenu ) }>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      </div>

      <div className="md:hidden">
        { showMenu && <Menu />}
      </div>

    </header>
  );
}

export default Header;