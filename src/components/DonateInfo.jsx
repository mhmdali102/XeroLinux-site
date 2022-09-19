import styled from "styled-components";
import SteamDeckImg from "../assets/images/help.png";

const DonateInfo = () => {
  return (
    <Div>
      <Img src={SteamDeckImg} alt="Steam Deck Image" />
      <p>
        <strong>- Help project to continue :</strong><br /><br />


My country (Lebanon ) is currently going through a bad economic crisis. We just got word that Electricity provisioning will drop to 3h a day down from 6h while Generator owners are forcing us to accept their 45% price increase due to Diesel prices skyrocketing, as a result we will not be able to afford having it on for long periods.. Without the essentials I cannot continue working on the project, or at least much less..

I would love to do the project full time, these are the costs to do so. Let's make it a reality people !<br /><br />


<strong>- New Device Support / Extra funds :</strong><br /><br />


Should we go over the set goal, any extra funds raised will go towards expanding the device support of XeroLinux to maybe include the likes of the <span><a href="https://store.steampowered.com/steamdeck" target="_blank">SteamDeck</a></span>, or the  <strong>Raspberry Pi 4/400</strong> what do you think of that ?
      </p>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Img = styled.img`
  width: 50%;
  margin: auto;
  padding-block-end: 1rem;
  object-fit: contain;
`;

export default DonateInfo;
