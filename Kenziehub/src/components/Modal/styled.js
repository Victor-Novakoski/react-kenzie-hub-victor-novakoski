import styled from 'styled-components'

export const ModalStyle = styled.section`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  .backGround {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    background-color: var(--Grey-4);
    opacity: 30%;
  }

  .div_modal {
    position: absolute;
    min-width: 300px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    background-color: var(--Grey-3);
    border-radius: 8px;
    overflow: hidden;
    
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background-color: var(--Grey-2);

      button {
        background-color: transparent;
        color: var(--Grey-0);
        font-size: 1.2rem;
      }
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;

      p{
        color: var(--Negative);
      }

      input {
        width: 100%;
        margin: 0 auto;
        height: 48px;
        background-color: var(--Grey-2);
        border: 1px solid var(--Grey-0);
        color: var(--Grey-0);
        padding: 0.5rem;
        font-size: medium;
      }
      select {
        width: 100%;
        margin: 0 auto;
        height: 48px;
        background-color: var(--Grey-2);
        border: 1px solid var(--Grey-0);
        color: var(--Grey-0);
        padding: 0.5rem;
        font-size: medium;
      }
      button {
        background-color: var(--Color-primary);
        color: var(--Grey-0);
        width: 100%;
        margin: 0 auto;
        border-radius: 4px;
        height: 48px;

        &:hover {
          background-color: var(--Color-primary-Focus);
        }
      }
    }
  }
`
