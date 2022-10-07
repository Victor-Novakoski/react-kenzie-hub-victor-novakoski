import styled from 'styled-components'

export const Global = styled.section`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --Color-primary: #ff577f;
    --Color-primary-Focus: #ff427f;
    --Color-primary-Negative: #59323f;
    --Grey-0: #f8f9fa;
    --Grey-1: #868e96;
    --Grey-2: #343b41;
    --Grey-3: #212529;
    --Grey-4: #121214;
    --Sucess: #3fe864;
    --Negative: #e83f5b;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`
