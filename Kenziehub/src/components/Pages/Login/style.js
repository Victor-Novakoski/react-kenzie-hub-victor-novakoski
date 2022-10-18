import styled from 'styled-components'

export const LoginPage = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  a {
    background-color: var(--Color-primary);
    color: var(--Grey-0);
    width: 100%;
    height: 48px;
    border-radius: 4px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  figure {
    text-align: center;
    margin-bottom: 1.5rem;
    width: 50%;
    max-width: 144px;

    img {
      width: 100%;
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
  }

  div {
    width: 90%;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--Grey-3);
    padding: 42px 22px;
    gap: 3rem;


  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;

    p {
      color: var(--Negative);
      font-size: 13px;
      width: 100%;
    }

    label {
      display: flex;
      flex-direction: column;
      position: relative;

      svg {
        position: absolute;
        top: 35px;
        right: 15px;
        cursor: pointer;
      }

      input {
        border: 1px solid var(--Grey-0);
        background-color: var(--Grey-2);
        color: var(--Grey-0);
        width: 100%;
        height: 48px;
        border-radius: 4px;
        padding: 0 16px;
      }
    }
  }
`
