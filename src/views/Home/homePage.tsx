import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const BeautifulText = styled.h1`
  font-size: 48px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <BeautifulText>Welcome to My UI Developer Journey!</BeautifulText>
      <ImageContainer>
        <Image src="/assets/images/react-dev.svg" alt="UI Developer" />
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomePage;
