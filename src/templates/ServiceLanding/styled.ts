import styled from 'styled-components';

export const CaseStudies = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap;
  margin: 8rem 2rem 4rem; */

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }

  a {
    /* position: relative;
    flex-basis: calc(33% - 4rem);
    margin: 0 2rem 6.4rem; */
    width: 30%;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 100%;
    }
  }

  a > div {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Header = styled.h2`
  margin: 10rem 0 0;
`;

export const ServicesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem auto 6rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: 4rem auto;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
    margin: 4rem auto;
  }
`;

export const ServiceItem = styled.div`
  margin-bottom: 2rem;

  .main-content-body-header {
    font-weight: bold;
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const ProcessPadding = styled.h2`
  margin-top: -20rem;
  height: calc((100vh - 450.6px) / 2);
`;

export const ProcessItem = styled.div`
  min-width: 30rem;
  max-width: 30rem;
  margin-right: 30rem;

  .circle {
    position: relative;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: hotpink;
    z-index: 10;
  }

  .line {
    position: relative;
    width: 60rem;
    height: 0.1rem;
    background: black;
    transform: translateY(-1rem);
    z-index: -1;
  }

  .main-content-body-header {
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 3rem;
  }

  &:first-of-type {
    margin-left: calc((100vw - 1300px) / 2);
    @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
      margin-left: calc((100vw * 0.05));
    }
  }

  &:last-of-type {
    .line {
      width: 50rem;

      &::after {
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        height: 0.1rem;
        width: 2rem;
        background: black;
        color: red;
        transform: rotate(45deg);
        transform-origin: top right;
      }
    }
  }
`;

export const VideoWrap = styled.div`
  display: flex;
  padding: 0 0 4rem;
  iframe {
    height: 72rem;
    width: 108rem;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    padding: 0;
    iframe {
      height: 42rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 3rem 0;
    iframe {
      height: 20rem;
      width: 100%;
    }
  }
`;
