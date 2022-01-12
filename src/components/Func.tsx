import styled from 'styled-components'
import { ReactComponent as Svg_home } from './svg/home.svg';
import { ReactComponent as Svg_bookmark } from './svg/bookmark.svg';
import { ReactComponent as Svg_community } from './svg/community.svg';
import { ReactComponent as Svg_logo } from './svg/logo.svg';
import { ReactComponent as Svg_pencil } from './svg/pencil.svg';
import { ReactComponent as Svg_right } from './svg/right.svg';
import { ReactComponent as Svg_left } from './svg/left.svg';
import { useEffect, useState } from 'react';

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
  position: fixed;
  height:54px;
  bottom:-1px;
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

function Func() {
  const [isShow,setIsShow] = useState<boolean>(true);

  useEffect(()=>{
    const doc = document.getElementsByClassName('Nav') as HTMLCollectionOf<HTMLElement>;
    if(isShow){
      doc[0].style.width = "100vw";
    }else{
      doc[0].style.width = "auto";
    }
  },[isShow])
  return (
    <div style={{display:'flex',justifyContent:'flex-end'}}>
      <Header>
        <Svg_logo />
        <FuncBtn />
      </Header>
      <Nav className='Nav'>
        {
          isShow && 
          <>
            <Svg_home style={{padding:16}} width={24} height={24} fill='#36E0F8' />
            <Svg_community style={{padding:16}} width={24} height={24} fill='white' />
            <Svg_bookmark style={{padding:16}} width={24} height={24} fill='white' />
            <Svg_pencil style={{padding:16}} width={24} height={24} fill='white' />
          </>
        }
        {
          isShow
          ? <Svg_right style={{padding:16}} onClick={()=>{setIsShow(!isShow)}} width={24} height={24} fill='white' />
          : <Svg_left style={{padding:14}} onClick={()=>{setIsShow(!isShow)}} width={24} height={24} fill='white' />
        }
      </Nav>
    </div>
  );
}

export default Func;