import styled from 'styled-components'

export const DefaultThemeComponent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  margin: auto;
  padding: 0;

  @media screen and (max-width: 1210px) {
    padding: 0 1rem;
  }
`
