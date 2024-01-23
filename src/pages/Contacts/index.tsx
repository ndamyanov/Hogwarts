import { StyledCenterDiv } from "./styles";

const Contacts = () => (
  <>
    <StyledCenterDiv>
      <img
        src={process.env.PUBLIC_URL + "/Corneliushogwarts.webp"}
        alt="ExampCorneliushogwartsle"
        width="400"
        height="500"
      />
      <div>
        <div>Cornelius Oswald Fudge,</div>
        <div>Ministry of Magic Headquarters,</div>
        <div>Underground of Whitehall and the HM Treasury building,</div>
        <div>London,</div>
        <div>Great Britain</div>
      </div>
    </StyledCenterDiv>
  </>
);

export default Contacts;
