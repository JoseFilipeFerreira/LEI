import styled from "styled-components";

export const Main = () => {
  return (
    <MainContent>
      <div className="text-title mobile-title">LoremWhat is Lorem Ipsum?</div>
      <img src="assets/homepage_image.svg" className="content-img"></img>
      <div className="homepage-text">
        <div className="text-title desktop-title">LoremWhat is Lorem Ipsum?</div>
        <div className="text-body homepage-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;

  .homepage-text {
    margin-left: 5%;
    text-align: center;
  }

  .homepage-body {
    margin-top: 5%;
  }

  .mobile-title {
    display: none;
    text-align: center;
  }

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

    flex-direction: column;
    padding-left: 0%;
    padding-right: 0%;
    padding-top: 20%;
    padding-bottom: 20%;
    gap: 35px;

    .mobile-title {
    display: initial;
  }

    .desktop-title {
      display: none;
    }

    .content-img {
      width: 80%;
    }
  

  }
`;
