import styled from 'styled-components';

export const CaseStudies = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    width: 30%;
  }
  a > div {
    margin: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
    a {
      width: 100%;
    }
  }
`;

export const VerticalWrap = styled.div`
  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    display: block;
    margin-top: 6rem;
  }
`;

export const ServicesWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const ServiceItem = styled.div`
  margin-bottom: 2rem;
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

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    &:first-of-type {
      margin-left: calc((100vw * 0.05));
    }
  }
`;

export const ProcessItemVertical = styled(ProcessItem)`
  position: relative;
  display: flex;
  margin-bottom: 3rem;
  max-width: 100%;
  .circle {
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 50%;
    z-index: 10;
    margin: 1.1rem 2rem 0 0;
  }
  .line {
    position: absolute;
    top: 2.2rem;
    left: 1rem;
    width: 0.1rem;
    height: 30rem;
    z-index: -1;
  }
  .main-content-body-header {
    margin-top: 0;
  }
  &:first-of-type {
    margin-top: 4rem;
    margin-left: 0;
  }
  &:last-of-type {
    margin-bottom: 10rem;
    .line {
      height: 18rem;
      width: 0.1rem;

      &::after {
        position: absolute;
        top: revert;
        right: 0;
        bottom: 0;
        height: 0.1rem;
        width: 2rem;
        transform: rotate(135deg);
      }
      @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        height: 22rem;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    &:last-of-type {
      .line {
        &::after {
        }
        height: 22rem;
      }
    }
  }
`;

export const VideoWrap = styled.div`
  display: flex;
  iframe {
    height: 72rem;
    width: 108rem;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    iframe {
      height: 42rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    iframe {
      height: 20rem;
      width: 100%;
    }
  }
`;
