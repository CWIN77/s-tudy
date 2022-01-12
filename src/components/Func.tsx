import styled from 'styled-components'
import { ReactComponent as Svg_home } from './svg/home.svg';
import { ReactComponent as Svg_bookmark } from './svg/bookmark.svg';
import { ReactComponent as Svg_community } from './svg/community.svg';
import { ReactComponent as Svg_logo } from './svg/logo.svg';
import { ReactComponent as Svg_pencil } from './svg/pencil.svg';
import { ReactComponent as Svg_tag } from './svg/tag.svg';
import { useState } from 'react';

const Header = styled.div`
  position: fixed;
  display:flex;
  align-items: center;
  justify-content: center;
  top:0px;
  max-width:100vw;
  width:100vw;
  height:7.25vh;
  background-color : #363636;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
`
const Nav = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  position: fixed;
  width:100vw;
  height:54px;
  bottom:0px;
  padding:3px;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.25);
  background-color : #363636;
  z-index: 2;
`
const FuncBtn = styled.div`
  width:20px;
  height:20px;
  border:3.25px solid white;
  border-radius: 30px;
  position: fixed;
  right:20px;
`
const ClickBox = styled.div`
  width:100vw;
  height:100vh;
  z-index:0;
  position:fixed;
  top:0px;
  left:0px;
`

function Func() {
  const [isShow,setIsShow] = useState<boolean>(true);

  return (
    <>
      <Header>
        <Svg_logo />
        <FuncBtn />
      </Header>
      {
        isShow && 
        <Nav>
          <Svg_home width={26} height={26} fill='#36E0F8' />
          <Svg_community width={26} height={26} fill='white' />
          <Svg_bookmark width={26} height={26} fill='white' />
          <Svg_tag width={26} height={26} fill='white' />
          <Svg_pencil width={26} height={26} fill='white' />
        </Nav>
      }
      {/* <ClickBox onClick={()=>{setIsShow(!isShow)}} /> */}
    </>
  );
}

export default Func;