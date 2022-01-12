import styled from 'styled-components'
import { ReactComponent as Svg_bgImg } from './svg/bgImg.svg';
import { ReactComponent as Svg_search } from './svg/search.svg';
import Post from './Post';
import { useState } from 'react';
import firebase from '../firebase';

const Container = styled.div`
  display:flex;
  /* flex-direction:column; */
  justify-content: center;
  flex-wrap: wrap;
  max-width:100vw;
  width:calc(100vw - 48px);
  min-height:calc(85.5vh - 48px);
  padding:24px;
  padding-top:calc(7.25vh + 24px);
  padding-bottom:calc(7.25vh + 24px);
  background-color : #282828;
`
const Background = styled.div`
  width:240px;
  height:240px;
  top:calc(50vh - 120px);
  left:calc(50vw - 120px);
  z-index:0;
  position:fixed;
`
const SearchBar = styled.input`
  background-color:#080808;
  max-width:400px;
  width:57vw;
  height:14px;
  outline: none;
  border:none;
  color:white;
  font-size: 14px;
  padding:12px;
`
const SearchBtn = styled.div`
  background-color:#5E5E5E;
  display:flex;
  align-items: center;
  justify-content: center;
  width:42px;
  height:38px;
`

const data:number[] = [0,1,2,3,4];

function Content() {
  const db = firebase.firestore();

  window.addEventListener('scroll',(e)=>{
    if(window.scrollY > 98){
      
    }
  })

  return (
    <Container>
      <SearchBar type="text" placeholder='검색'/>  {/* 지워야함 */}
      {
        data &&
        data.map((doc,i)=>{
          return(
            <Post data={doc} key={i}/>
          )
        })
      }
      <Background>
        <Svg_bgImg style={{width:"100%", height:"100%"}} />
      </Background>
    </Container>
  );
}

export default Content;