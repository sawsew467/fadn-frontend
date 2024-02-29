'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #888888b7;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    position: relative;
    width: 120px;
    height: 140px;
    background-image: radial-gradient(circle 30px, #fff 100%, transparent 0),
      radial-gradient(circle 5px, #fff 100%, transparent 0),
      radial-gradient(circle 5px, #fff 100%, transparent 0),
      linear-gradient(#fff 20px, transparent 0);
    background-position:
      center 127px,
      94px 102px,
      16px 18px,
      center 114px;
    background-size:
      60px 60px,
      10px 10px,
      10px 10px,
      4px 14px;
    background-repeat: no-repeat;
    z-index: 10;
    perspective: 500px;
  }
  .loader::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%) rotate(-45deg);
    border-right-color: transparent;
    box-sizing: border-box;
  }
  .loader::after {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    transform: translate(-50%, -55%) rotate(-45deg) rotateY(0deg);
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    border: 7px solid #f98125;
    border-radius: 50%;
    animation: rotate 0.5s linear infinite;
  }
`;

export default function Loading() {
  return (
    <Container>
      <span className="loader"></span>
    </Container>
  );
}
