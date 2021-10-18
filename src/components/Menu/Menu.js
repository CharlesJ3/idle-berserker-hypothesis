import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './Menu.scss';

const Menu = (props) => {
  const [menu, menuChange] = useState({
    currentMenu: 0,
    menuOpen: false,
  });

  const updateMenu = (menuItem) => {
    let currentMenu = menu.currentMenu;

    menuChange(() => ({
      currentMenu: menuItem,
      menuOpen: !menu.menuOpen,
    }));

    console.log(menu.currentMenu);
    console.log(currentMenu);
  };

  return (
    <div className='mainMenuBackground'>
      <div className='mainMenu'>
        <section onClick={() => updateMenu(1)}>
          <h3>BATTLE</h3>
        </section>

        {/* If Menu is set to this section and menu is set to be opened, open it */}
        {menu.currentMenu === 1 && menu.menuOpen === true ? (
          <div className='menuSection menuOne'>
            <div className='innerSection description'>
              Description of Battle Here
            </div>
          </div>
        ) : (
          ''
        )}

        <section onClick={() => updateMenu(2)}>
          <h3>BASE</h3>
        </section>

        {/* If Menu is set to this section and menu is set to be opened, open it */}
        {menu.currentMenu === 2 && menu.menuOpen === true ? (
          <div className='menuSection menuTwo'>
            {' '}
            <div className='innerSection description'>
              Description of Base Here
            </div>
          </div>
        ) : (
          ''
        )}
        <section onClick={() => updateMenu(3)}>
          <h3>SHIPS</h3>
        </section>

        {/* If Menu is set to this section and menu is set to be opened, open it */}
        {menu.currentMenu === 3 && menu.menuOpen === true ? (
          <div className='menuSection menuThree'>
            {' '}
            <div className='innerSection description'>
              Description of Ships Here
            </div>
          </div>
        ) : (
          ''
        )}
        <section onClick={() => updateMenu(4)}>
          <h3>PRESTIGE</h3>
        </section>
        {/* If Menu is set to this section and menu is set to be opened, open it */}
        {menu.currentMenu === 4 && menu.menuOpen === true ? (
          <div className='menuSection menuFour'>
            {' '}
            <div className='innerSection description'>
              Description of Prestige Here
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Menu;
