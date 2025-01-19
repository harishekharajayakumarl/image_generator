import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { AddRounded } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bpx-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px){
  padding: 10px 12px;
  }
`;
const NavBar = () => {
  return (
    <Container>GenAI
      <Button text="Create New Post" 
      leftIcon={
      <AddRounded style={{
        fontSize: "18px",
      }}/>}/>
    </Container>
  )
}

export default NavBar;