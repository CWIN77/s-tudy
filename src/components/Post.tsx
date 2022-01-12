import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  max-width:400px;
  width:78vw;
  max-height: calc(400px / 16 * 9);
  height:calc(78vw / 16 * 9);
  z-index: 1;
  background-color : #ffffff;
  color:black;
  box-shadow: 0px 6px 16px 8px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 3vh;
  margin-bottom: 8vh;
`
function Post({data}:any){
  // console.log(data)
  return (
    <Container>
      
    </Container>
  );
}

export default Post;