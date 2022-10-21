import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  button {
    background-color:var(--Grey-3);
    color:var(--Grey-0);
    padding: 0 1rem;
    height:32px;
    border-radius:4px;
  }
  @media (min-width: 1024px){
    justify-content: space-around;
  }
`
