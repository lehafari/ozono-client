import React from 'react';
import { HeroContainer, HeroImage, HeroText, HomeContainer } from './styles';
import heroImage from '../../assets/images/hero-image.png';

const Home = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroText></HeroText>
        <HeroImage>
          <img src={heroImage} alt="cenaoz" />
        </HeroImage>
      </HeroContainer>
    </HomeContainer>
  );
};

export default Home;
