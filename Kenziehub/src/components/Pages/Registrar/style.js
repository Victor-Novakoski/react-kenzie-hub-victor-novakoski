import styled from 'styled-components'

export const Container = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1440px) {
    width: 30%;
  }
  @media (min-width: 1700px) {
    width: 20%;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      padding: 0 1.015rem;
      background-color: var(--Grey-3);
      color: var(--Grey-0);
      width: 67.49px;
      height: 40.11px;
    }
  }

  div + div {
    background-color: var(--Grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      span {
        color: var(--Grey-1);
      }
    }

    button {
      width: 100%;
      margin-top: 1rem;
      background-color: var(--Color-primary-Negative);

      &:hover {
        -webkit-animation: vibrate-1 0.3s linear infinite both;
        animation: vibrate-1 0.3s linear infinite both;

        @-webkit-keyframes vibrate-1 {
          0% {
            -webkit-transform: translate(0);
            transform: translate(0);
          }
          20% {
            -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
          }
          40% {
            -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
          }
          60% {
            -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
          }
          80% {
            -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
          }
          100% {
            -webkit-transform: translate(0);
            transform: translate(0);
          }
        }
        @keyframes vibrate-1 {
          0% {
            -webkit-transform: translate(0);
            transform: translate(0);
          }
          20% {
            -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
          }
          40% {
            -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
          }
          60% {
            -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
          }
          80% {
            -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
          }
          100% {
            -webkit-transform: translate(0);
            transform: translate(0);
          }
        }
      }
    }
  }
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  input {
    background-color: var(--Grey-2);
    color: var(--Grey-0);
    height: 2rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.015rem;

    &::placeholder {
      color: var(--Grey-1);
    }
  }
  select {
    background-color: var(--Grey-2);
    color: var(--Grey-1);
    height: 2rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.015rem;

    &::placeholder {
      color: var(--Grey-1);
    }
  }
`
