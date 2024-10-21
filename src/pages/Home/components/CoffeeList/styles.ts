import styled from 'styled-components'

export const CoffeeListComponent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  & > h2 {
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme.subtitle};
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media screen and (max-width: 1210px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
