import styled from "styled-components";
import tuxImg from "../assets/images/tux.avif";
import { TbChristmasTree  } from "react-icons/tb";
import { useContext } from "react";
import { PopUpContext } from "../contexts/PopUpContext";
import Settings from "../content/Settings.json";

const Tux = () => {
  const { setPopUp } = useContext(PopUpContext);

  const openGift = () => {
    setPopUp("Treasure");
  }

  if (!Settings.tux) return null;

  return <Div>
    <P>
      <h4><TbChristmasTree /> Merry Christmas Linux Nerds <TbChristmasTree /></h4>
      <br />
      There be a hidden 
      <span onClick={openGift}> Surprise</span> on this here site, <br />
      let the Christmas Hunt Begin.. Ho ! Ho ! Ho !
      <br />
      <br />
      <Span>The XeroLinux Team</Span>
    </P>
    <Img src={tuxImg} alt="Tux Image" />
  </Div>
};

const Div = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  transform: translateY(100%);
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 1400px) {
    transform: translateY(80%);
  }
`

const P = styled.p`
  color: rgb(var(--fg2));
  background-color: rgb(var(--bg2));
  padding: 1rem;
  border-radius: var(--border-radius);
  position: relative;
  overflow: visible;
  flex: 1;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 auto auto;
    width: 1.5rem;
    height: 1.5rem;
    background-color: rgb(var(--bg2));
    transform: translate(100%, -50%);
    border-radius: 50%;
    box-shadow: 1.5rem .3rem 0 -.25rem rgb(var(--bg2)),
                2.6rem .6rem 0 -.5rem rgb(var(--bg2));
  }
`

const Span = styled.span`
  font-style: italic;
`

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`

export default Tux;
