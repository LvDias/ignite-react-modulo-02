import styled from 'styled-components'

export const IntroComponent = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;

  & > img {
    max-width: 100vw;
    width: 29.75rem;
    height: 22.5rem;
  }

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple},
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple},
      ${(props) => props.theme.yellow}
    );

    opacity: 0.1;
    filter: blur(2rem);
  }

  @media screen and (max-width: 1210px) {
    flex-direction: column;
  }
`

export const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const TextComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme.title};
    font-size: 3rem;
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme.subtitle};
    font-size: 1.25rem;
  }
`

export const ListComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  gap: 1.25rem;

  @media screen and (max-width: 1210px) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }
`
