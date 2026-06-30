

import Herox from '../components/canvas/herox.jsx';
import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  color: #da4ea2; /* Change the color to #da4ea2 */
  font-family: 'cali', sans-serif;
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;  
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 24px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

// const Img = styled.img`
//   width: 800px;
//   height: 600px;
//   object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   animation: animate 2s infinite ease alternate;

//   // @media only screen and (max-width: 768px) {
//   //   width: 300px;
//   //   height: 300px;
//   // }

//   // @keyframes animate {
//   //   to {
//   //     transform: translateY(20px);
//   //   }
//   }
// `;

const Hero = () => {
  return (
    <Section>
      {/* <Navbar /> */}
      <Container>
        <Left>
        <Subtitle>&lt;div&gt;</Subtitle>
          <Title>FRONTEND DEVELOPER;</Title>
          <Subtitle>&lt;/div&gt;</Subtitle>
          <WhatWeDo>
          Crafting Interactive, Fast, Aesthetic Front-End Marvels with a Creative Touch.
          </WhatWeDo>
          {/* <Desc>
          
          </Desc> */}
          <div className='flex gap-4'>
          <Button onClick={() => window.open("https://docs.google.com/document/d/1ti5xekszJzQ7i5w8fwUkfYHDLj2wDWZWVeQXGsLH44s/edit?usp=sharing", "_blank")}>Resume</Button>
          <a href="https://github.com/rishisahu8459" target="_blank" rel="noopener noreferrer">
              <h4>github</h4>  
            </a>
             <a href="https://www.linkedin.com/in/rishabh-sahu-3ba680187/" target="_blank" rel="noopener noreferrer">
              <h4>linkedin</h4>
            </a>
          </div>
          <h6>Scroll Down to the abyss of creations.</h6>
          
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.4}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          {/* <Img src="../assets/tech/docker.png" /> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
