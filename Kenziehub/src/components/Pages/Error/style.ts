import styled from 'styled-components'

export const ErrorPage = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > svg {
    width: 100%;
    height: 5rem;
  }
  div {
    display: flex;
    p {
      font-weight: bold;
    }
    p:nth-child(1) {
      animation-delay: 0.1s;
    }
    p:nth-child(2) {
      animation-delay: 0.2s;
    }
    p:nth-child(3) {
      animation-delay: 0.3s;
    }
    p:nth-child(4) {
      animation-delay: 0.4s;
    }
    p:nth-child(5) {
      animation-delay: 0.5s;
    }
    p:nth-child(6) {
      animation-delay: 0.6s;
    }
  }
  @media (min-width: 1024px) {
    > svg {
      width: 100%;
      height: 15rem;
    }
    div {
      p {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
`
