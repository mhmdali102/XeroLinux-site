import styled, { keyframes } from "styled-components";
import laptop from "../assets/images/laptop.png";
import Button from "./Button";
import leb from "../assets/images/leb.svg";
import bg from "../assets/images/herobg.png";
import Buttons from "./Buttons";
import Weather from "./Weather";

const Hero = ({countdown}) => {
  return (
    <HeroSection id="Home">
      <div className="container">
        <Flex>
          <Content>
            <H1>XeroLinux</H1>
            <P>
              A Hobbyist Arch-Based Distro, built using{" "}
              <a href="https://alci.online/" target="_blank" rel="noreferrer">
                ArcoLinux's ALCI
              </a>{" "}
              build scripts. It uses the awesome, and highly customizable Dektop
              Environment, known as KDE Plasma. It brings a good balance between
              Stability and Performance. Oh and it looks so damn sexy too !
              <br />
              <br />I hope you enjoy using it as much as I have creating it ;)
            </P>
            <Buttons>
              <a href={countdown ? "#Countdown" : "#Download"}>
                <Button
                  text={countdown ? "New Release!" : "Download"}
                  primary
                  padding=".75em 1.5em"
                  fz="var(--fz-5)"
                  clr="rgb(var(--black))"
                />
              </a>
              <a
                href="https://forum.xerolinux.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="Forum"
                  themed
                  padding=".75em 2.35em"
                  fz="var(--fz-5)"
                  clr="rgb(var(--white))"
                />
              </a>
            </Buttons>
            <Origin>
              <img src={leb} alt="Lebanon Flag" />
              <p>Proudly Made in Lebanon</p>
            </Origin>
          </Content>
          <ImgContainer>
            <Weather />
            <img src={laptop} alt="XeroLinux" />
          </ImgContainer>
        </Flex>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  padding-block: var(--padding-section);
  min-height: min(80vh, 100vw);
  position: relative;
  margin-top: -3.5rem;

  @media (max-width: 1200px) {
    padding-block: calc(var(--padding-section) * 1.5);
  }

  display: grid;
  place-items: center;

  background-image: url(${bg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentIn = keyframes`
from {
  opacity: 0;
  transform: translateX(-3rem);
}
`;

const ImgIn = keyframes`
from {
  opacity: 0;
  transform: translateX(3rem);
}
`;

const Content = styled.div`
  flex: 0.5;
  animation: ${ContentIn} 0.5s var(--transition-timing-function);
`;

const Origin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: cetner;
  font-size: var(--fz-5);
  gap: 0.5rem;

  & img {
    width: 1.5rem;
    object-fit: contain;
  }
`;

const ImgContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: cener;
  justify-content: center;
  position: relative;
  animation: ${ImgIn} 0.5s var(--transition-timing-function);
  & img {
    object-fit: contain;
    width: 80%;
  }
`;

const H1 = styled.h1`
  font-size: var(--fz-1);
  font-weight: bold;
`;

const P = styled.p`
  font-size: var(--fz-5);
  margin-block: 1em;
  & > a {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const Flex = styled.div`
  color: rgb(var(--white));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export default Hero;
