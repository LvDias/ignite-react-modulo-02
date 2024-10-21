import styled from 'styled-components'

interface ItemListComponentProps {
  background: string
}

export const ItemListComponent = styled.div<ItemListComponentProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme[props.background]};
  }

  & > p {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme.text};
  }
`
