import styled from 'styled-components'

export const FormComponent = styled.div`
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

  color: ${(props) => props.theme.yellowDark};

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

export const FormInputComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

interface InputComponentProps {
  columnstart: number
  columnend: number
}

export const InputComponent = styled.input<InputComponentProps>`
  position: relative;

  background: ${(props) => props.theme.input};
  border: solid 1px ${(props) => props.theme.button};
  border-radius: 8px;
  padding: 0.75rem;

  transition: border 0.2s;

  grid-column-start: ${(props) => props.columnstart};
  grid-column-end: ${(props) => props.columnend};

  @media screen and (max-width: 1210px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.label};
  }

  &:focus {
    border: solid 1px ${(props) => props.theme.yellowDark};
  }
`
