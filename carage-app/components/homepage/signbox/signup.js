import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export const SignUp = () => {
  const showRegister = (state) => state.sign.showRegister;
  const dispatch = useDispatch();

  const value = useSelector(showRegister);

  if (value) return <SUBox>
    <form>
          <div>
          <div className="box-header">
              <div className="text-title">Create an account</div>
              <svg onClick={() => dispatch({ type: "sign/hideSign" })}>
                <use href="#close"/>
              </svg>
            </div>
            <div className="text-footnote">
              Already have an account?
              <span className="clickable" onClick={() => dispatch({ type: 'sign/showLogin' })}> Log In</span>
            </div>
          </div>
          <div>
            <div className="text-subhead">Email address</div>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="signin-input"
            ></input>
          </div>
          <div>
            <div className="text-subhead">Password</div>
            <input
              type="password"
              placeholder="Enter your password..."
              className="signin-input"
            ></input>
            <div className="text-footnote">Password should contain both letter and number, with minimum length of 8 characters</div>
          </div>
          <div className="login-button">
            <button className="text-button">Create an account</button>
          </div>
        </form>
  </SUBox>;
  else return null;
};

const SUBox = styled.div`
  width: 496px;
  height: 440px;
  background-color: var(--LEI2);
  border-radius: 25px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: 0.2s ease-in-out show;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    height: 100%;
    width: 100%;
  }
  
  svg {
    width: 25px;
    height: 25px;
    fill: var(--LEI5);
    transition: 0.1s ease;
    cursor: pointer;
  }

  svg:hover {
    fill: var(--LEI3);
    transition: 0.2s ease;
  }

  .box-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .text-footnote {
    margin-top: 10px!important;
    margin-bottom: 20px!important;
  }

  .login-button {
    align-self: center;
    width: 100%;
  }

  .login-button button {
    width: 100%;
    height: 48px;
    background-color: var(--LEI3);
    border: none;
    border-radius: 8px;
    color: var(--LEI5);
  }

  .login-button button:hover {
    background-color: var(--LEI3-1);
  }

  .signin-input {
    width: 100%;
    font-size: 14px;
    border-radius: 8px;
    padding: 0 16px;
    height: 48px;
    background-color: transparent;
    color: var(--LEI5);
    border: solid 1px var(--LEI2-1);
    outline: none;
    margin-top: 10px;
  }

  .signin-input:hover {
    border: solid 1px var(--LEI3);
  }

  .signin-input:focus {
    outline: solid 2px var(--LEI3);
  }

  .clickable {
    cursor: pointer;
    color: var(--LEI3);
  }

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  }

  @keyframes show {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
  
`;
