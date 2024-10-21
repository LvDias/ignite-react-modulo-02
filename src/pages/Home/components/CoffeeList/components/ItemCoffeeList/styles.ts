import styled from 'styled-components'

export const ItemCoffeeListComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: ${(props) => props.theme.card};
  padding: 0 1.25rem 1.25rem;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`

export const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -1rem;
`

export const ImageAndCategoryComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  & > img {
    width: 7.5rem;
    height: 7.5rem;
  }

  & > div {
    display: flex;
    gap: 0.25rem;

    & > span {
      font-size: 0.625rem;
      font-weight: 900;
      color: ${(props) => props.theme.yellowDark};

      padding: 0.25rem 0.5rem;
      border-radius: 25px;
      background: ${(props) => props.theme.yellowLight};

      text-align: center;
      text-transform: uppercase;
    }
  }
`

export const TextComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  text-align: center;

  & > h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.subtitle};
  }

  & > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.label};
  }
`

export const ShoppingComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  & > h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.text};
    font-weight: 900;

    &::before {
      content: 'R$ ';
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    border-radius: 8px;

    background: ${(props) => props.theme.purpleDark};
    color: ${(props) => props.theme.white};
  }
`
