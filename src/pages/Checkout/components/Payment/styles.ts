import styled from 'styled-components'

export const PaymentComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.card};
  border-radius: 8px;
  padding: 2.5rem;

  @media screen and (max-width: 1210px) {
    padding: 1rem;
  }
`

export const TextComponent = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;

  color: ${(props) => props.theme.purple};

  & > div {
    display: flex;
    flex-direction: column;

    & > h3 {
      font-size: 1rem;
      color: ${(props) => props.theme.subtitle};
      font-weight: 400;
    }

    & > p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.text};
    }
  }
`

export const SelectComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media screen and (max-width: 1210px) {
    grid-template-columns: 1fr;
  }
`

export const OptionComponent = styled.input`
  display: none;

  & + label {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: start;
    padding: 1rem;

    cursor: pointer;

    color: ${(props) => props.theme.purple};

    background: ${(props) => props.theme.button};
    border: solid 1px transparent;
    border-radius: 8px;

    transition:
      border 0.2s,
      background 0.2s;

    & > h3 {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.text};
      font-weight: 400;
      line-height: 1;
    }

    &:hover {
      background: ${(props) => props.theme.hover};
    }
  }

  &:checked + label {
    border: solid 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme.purpleLight};
  }
`
