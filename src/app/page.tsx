"use client";

import Image from "next/image";

import bgHero from "@/assets/bg-hero.jpg";
import styled from "styled-components";

const Hero = styled.main`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

const Home = () => {
  return (
    <Hero>
      <Image
        src={bgHero}
        alt="Backgorund Mortal Komabat"
        priority
        quality={100}
      />
    </Hero>
  );
};

export default Home;
