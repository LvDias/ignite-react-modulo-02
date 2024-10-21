import styled from 'styled-components'

export const CoffeeComponent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  border-bottom: solid 1px ${(props) => props.theme.button};
  padding-bottom: 1.5rem;

  & > h3 {
    color: ${(props) => props.theme.text};
    font-size: 1rem;

    &::before {
      content: 'R$ ';
    }
  }
`

export const InfoComponent = styled.div`
  display: flex;
  gap: 1.25rem;

  & > img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h3 {
      font-size: 1rem;
      color: ${(props) => props.theme.subtitle};
      font-weight: 400;
    }

    & > div {
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 8px;

  background: ${(props) => props.theme.button};
  color: ${(props) => props.theme.purple};

  & > h3 {
    font-size: 0.75rem;
    color: ${(props) => props.theme.text};
    font-weight: 400;
    line-height: 1;
  }
`
