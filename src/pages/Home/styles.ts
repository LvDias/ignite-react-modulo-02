import styled from 'styled-components'

export const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.75rem;
  padding: 5.875rem 0;

  @media screen and (max-width: 1210px) {
    gap: 1rem;
    padding: 1rem 0;
  }
`
