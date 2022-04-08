import styled from "styled-components";

const Title = ({ text, sec, ml }) => {
  return sec ? <H2>{text}</H2> : <H1 ml={ml}>{text}</H1>;
};

const H1 = styled.h1`
  font-size: var(--fz-1);
  font-weight: bold;
  color: rgb(var(--fg2));
  text-align: center;
  margin-block-end: 1em;
  @media (min-width: 1100px) {
    margin-left: ${(props) => props.ml};
  }
`;

const H2 = styled.h2`
  font-size: var(--fz-2);
  color: rgb(var(--fg));
  margin-block-end: 1em;
`;

export default Title;
