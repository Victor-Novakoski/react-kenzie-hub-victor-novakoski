import styled from 'styled-components'

export const HomePage = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;
    border: 1px solid var(--Grey-3);

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
    span {
      color: var(--Grey-1);
    }
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
`
