import styled from 'styled-components'

export const ShoppingCartComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.card};
  border-radius: 8px 32px 8px 32px;
  padding: 2.5rem;

  @media screen and (max-width: 1210px) {
    padding: 1rem;
  }
`

export const InfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > div {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    gap: 0.75rem;

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 1rem;
    }

    p,
    span {
      color: ${(props) => props.theme.text};
    }

    h3 {
      color: ${(props) => props.theme.subtitle};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.75rem;

    border-radius: 8px;

    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.yellowDark};
    }
  }
`
