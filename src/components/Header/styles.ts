import styled, { css } from 'styled-components'

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  & > img {
    width: 5.313rem;
    height: 2.5rem;
    cursor: pointer;
  }
`

export const NavComponent = styled.nav`
  display: flex;
  gap: 0.75rem;
`

export const LocalComponent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 8px;

  background: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};
  font-size: 0.875rem;
  font-weight: normal;

  & > svg {
    color: ${(props) => props.theme.purple};
  }
`

interface ShoppingCartComponentProps {
  notification: number
}

export const ShoppingCartComponent = styled.div<ShoppingCartComponentProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      props.notification > 0
        ? css`
            content: '${props.notification}';
          `
        : css`
            content: none;
          `}
    position: absolute;
    top: calc(1.25rem / -2);
    right: calc(1.25rem / -2);

    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 900;
    color: ${(props) => props.theme.white};

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;

    background: ${(props) => props.theme.yellowDark};
  }
`
