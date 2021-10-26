import React from 'react';
import './Menu.scss';

const Menu = ({ toggleChecked, cameraPan }) => {

  const menuSwitch = ( menu ) => {
    switch (menu) {
      case 1:
        // If menu clicked is not open, open that menu
        if(document.querySelector('.menu__one').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'inherit';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
        }

        toggleChecked();
      break;
      case 2:
        if(document.querySelector('.menu__two').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'inherit';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
        }
      break;
      case 3:
        if(document.querySelector('.menu__three').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'inherit';
          document.querySelector('.menu__four').style.display = 'none';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
        }
      break;
      case 4:
        if(document.querySelector('.menu__four').style.display !== 'inherit') {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'inherit';
        } else {
          document.querySelector('.menu__one').style.display = 'none';
          document.querySelector('.menu__two').style.display = 'none';
          document.querySelector('.menu__three').style.display = 'none';
          document.querySelector('.menu__four').style.display = 'none';
        }
      break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className="mainMenuBackground">
        <div className="mainMenu">
          <section onClick={() => menuSwitch(1)}>BATTLE</section>
          <section onClick={() => menuSwitch(2)}>BASE</section>
          <section onClick={() => menuSwitch(3)}>SHIPS</section>
          <section onClick={() => menuSwitch(4)}>PRESTIGE</section>
        </div>
      </div>
      <div className='menu'>
        <div className='menu__one'>

        </div>
        <div className='menu__two'>

        </div>
        <div className='menu__three'>

        </div>
        <div className='menu__four'>

        </div>
      </div>
    </div>
  );
}

export default Menu;
