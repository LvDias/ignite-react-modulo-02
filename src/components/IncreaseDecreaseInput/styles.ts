import styled from 'styled-components'

export const IncreaseDecreaseInputComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${(props) => props.theme.button};

  border-radius: 8px;

  & > p {
    line-height: 0;
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.75rem 0.5rem;

    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`
