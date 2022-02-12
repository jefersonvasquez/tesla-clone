import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Container = styled.div`
    min-block-size: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    inset-inline: 0;
    z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
  }

  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex; //to remove
  align-items: center; //to remove
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const CustomClose = styled(Close)`
  cursor: pointer;
`

const BurgerNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  inline-size: 300px;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .2s ease;

  li {
    padding-block: 15px;
    border-bottom: 1px solid rgba(0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

function Header() {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
        <a>
            <img src='./images/logo.svg' alt=''/>
        </a>
        <Menu>
          {cars && cars.map((car, index) => 
            <a key={index} href='#'>{car}</a>
          )}
        </Menu>
        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <CustomMenu onClick={() => setOpen(true)}></CustomMenu>
        </RightMenu>
        <BurgerNav show={open}>
          <CloseWrapper>
            <CustomClose onClick={() => setOpen(false)} />
          </CloseWrapper>
          {cars && cars.map((car, index) => 
            <li><a key={index} href='#'>{car}</a></li>
          )}
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header;
