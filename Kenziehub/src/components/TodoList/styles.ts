import styled from 'styled-components'

export const ListTecnologias = styled.section`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 780px;
  margin: 0 auto;
  gap: 1rem;

  .tecnologias {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .plus {
      background-color: var(--Grey-3);
      color: var(--Grey-0);
      padding: 0.5rem;
      border-radius: 4px;
    }
  }
  ul {
    background-color: var(--Grey-3);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--Grey-4);
      padding: 1rem;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        button {
          background-color: transparent;
          color: var(--Grey-0);
          font-size: 1rem;
        }
      }
    }
  }
`
