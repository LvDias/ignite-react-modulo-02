import styled from 'styled-components'

export const CheckoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.75rem;
  padding: 2.5rem 0;

  & > form {
    display: grid;
    grid-template-columns: 40rem 28rem;
    gap: 2rem;
    align-items: start;

    @media screen and (max-width: 1210px) {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 1210px) {
    gap: 1rem;
    padding: 1rem 0;
  }
`

export const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    font-size: 1.125rem;
    font-weight: 900;
    color: ${(props) => props.theme.subtitle};
  }
`
