import styled from 'styled-components'

export const ThanksComponent = styled.div`
  display: flex;
  gap: 6.375rem;
  padding: 5rem 0;

  & > img {
    max-width: 100vw;
    width: 30.75rem;
    height: 18.313rem;
  }

  @media screen and (max-width: 1210px) {
    gap: 1rem;
    padding: 1rem 0;
    flex-direction: column;
  }
`

export const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TextComponent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.yellowDark};
    font-size: 2rem;
    font-weight: 900;
  }

  h3 {
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const InfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;

  border: 2px solid transparent;
`
