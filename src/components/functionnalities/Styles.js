import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 10%;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: black;
  @media (max-width: 600px) {
    left: 85%;
    bottom: 20%;
    font-size: 2.5rem;
  }
`;
