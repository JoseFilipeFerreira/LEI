import styled from "styled-components";

import { TopTitle } from "./main/toptitle"
import { Top } from "../../dashboard/main/top";
import { Ad } from "./main/ad";

export const Main = ({id}) => {
  return (
    <Dash>
        <Top title="Market • Ad"/>
        <TopTitle />
        <div className="divisor"></div>
        <Ad />
    </Dash>
  );
};

const Dash = styled.div`
  background-color: var(--LEI1);
  height: 100%;
  width: 100%;
  border-radius: 50px 0 0 50px;
  padding: 30px;
  padding-right: 144px;
  padding-left: 144px;
  display: grid;
  grid-template-rows: min-content min-content min-content auto;

    .divisor {
        width: 100%;
        height: 2px;
        background-color: var(--LEI2);
        margin-top: 25px;
        margin-bottom: 25px;
    }

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
