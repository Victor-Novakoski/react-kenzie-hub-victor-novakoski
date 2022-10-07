import styled from 'styled-components'

export const LoginPage = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  figure {
    text-align: center;
    margin-bottom: 1.5rem;
    width: 50%;

    img {
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 20%;
    }
    @media (min-width: 2000px) {
      width: 10%;
    }
  }

  span {
    color: var(--Grey-1);
  }

  button {
    background-color: var(--Grey-1);
    width: 100%;
    height: 48px;
    border-radius: 4px;
    color: var(--Grey-0);
    font-weight: 900;

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

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--Grey-3);
    padding: 42px 22px;
    gap: 3rem;

    @media (min-width: 1024px) {
      width: 50%;
    }
    @media (min-width: 1440px) {
      width: 40%;
    }
    @media (min-width: 2000px) {
      width: 20%;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;

    input {
      border: 1px solid var(--Grey-0);
      background-color: var(--Grey-2);
      color: var(--Grey-0);
      width: 100%;
      height: 48px;
      border-radius: 4px;
      padding: 0px 16.2426px;
    }

    button {
      background-color: var(--Color-primary);
      color: var(--Grey-0);
      width: 100%;
      height: 48px;
      border-radius: 4px;
      font-weight: 900;
    }
  }
`
