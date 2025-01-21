import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  min-height: 300px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 16px;
  flex-direction: column;
  border: 2px dashed ${({theme}) => theme.yellow};
  color: ${({theme}) => theme.arrow + 80};
  border-radius: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  border-radius: 24px;
  background: ${({theme}) => theme.black + 50};
`;

const GeneratedImageCard = ({src, loading}) => {
  return (
    <Container>
      {
        loading ? (
        <>
        <CircularProgress style={{color: "inherit", width: "24px", height:"24px"}}/>
        Generating your image</> 
        ) : (
          <>{src ? <Image src={src}/> : <>Write a prompt to generate image </>}</>
        )
      }
      <Image />
    </Container>
  )
}

export default GeneratedImageCard;