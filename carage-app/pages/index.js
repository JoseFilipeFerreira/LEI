import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Carage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <navbar>
        <div className="text-title logo">CARAGE</div>
        <div className="navbar-options">
          <div>
            <a href="#" className="text-subhead navbar-option-hover">
              Home
            </a>
          </div>
          <div>
            <a href="#" className="text-subhead navbar-option-hover">
              About
            </a>
          </div>
          <div>
            <a href="#" className="text-subhead navbar-option-hover">
              Contact
            </a>
          </div>
        </div>
        <div className="sign">
          <div className="signin">
            <a href="#" className="text-button navbar-option-hover">
              Sign In
            </a>
          </div>
          <a href="#">
            <div className="signup text-button">Sign Up</div>
          </a>
        </div>
      </navbar>

      <main>
        <img src="assets/homepage_image.svg" height="50%"></img>
        <div className="homepage-text">
          <div className="text-title">LoremWhat is Lorem Ipsum?</div>
          <div className="text-body homepage-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </main>

      <footer>
        <div className="text-footnote direitos">
          2021 © Todos os direitos reservados
        </div>
        <div className="social">
          <a href="#">
            <svg>
              <use href="#facebook" />
            </svg>
          </a>
          <a href="#">
          <svg>
              <use href="#instagram" />
            </svg>
          </a>
          <a href="#">
          <svg>
              <use href="#twitter" />
            </svg>
          </a>
        </div>
        <div className="text-footnote made-with">
          Made with <span>❤️</span> by Group 7
        </div>
      </footer>

      <svg display="none">
        <symbol width="25" height="25" viewBox="0 0 25 25" id="facebook">
          <path d="M16.6636 4.15104H18.9459V0.176042C18.5521 0.121875 17.198 0 15.6209 0C12.3302 0 10.0761 2.06979 10.0761 5.87396V9.375H6.44482V13.8187H10.0761V25H14.5282V13.8198H18.0125L18.5657 9.37604H14.5271V6.31458C14.5282 5.03021 14.874 4.15104 16.6636 4.15104Z" />
        </symbol>
        <symbol width="25" height="25" viewBox="0 0 25 25" id="instagram">
          <path d="M24.9755 7.35007C24.917 6.02172 24.7022 5.1085 24.3945 4.31717C24.077 3.4772 23.5886 2.72518 22.9488 2.10002C22.3236 1.46513 21.5666 0.971793 20.7364 0.659308C19.9405 0.351593 19.032 0.136784 17.7037 0.0782166C16.3654 0.0146894 15.9406 0 12.5464 0C9.15216 0 8.72731 0.0146894 7.394 0.0732565C6.06566 0.131824 5.15244 0.346824 4.3613 0.654348C3.52114 0.971793 2.76912 1.46017 2.14396 2.10002C1.50907 2.72518 1.01593 3.48216 0.703253 4.3124C0.395538 5.1085 0.180729 6.01676 0.122162 7.34511C0.0586347 8.68338 0.0439453 9.10822 0.0439453 12.5024C0.0439453 15.8967 0.0586347 16.3215 0.117202 17.6548C0.175769 18.9832 0.390769 19.8964 0.698484 20.6877C1.01593 21.5277 1.50907 22.2797 2.14396 22.9049C2.76912 23.5398 3.5261 24.0331 4.35634 24.3456C5.15244 24.6533 6.0607 24.8681 7.38924 24.9267C8.72235 24.9854 9.14739 24.9999 12.5416 24.9999C15.9358 24.9999 16.3607 24.9854 17.694 24.9267C19.0223 24.8681 19.9355 24.6533 20.7267 24.3456C22.4068 23.696 23.7351 22.3677 24.3847 20.6877C24.6922 19.8916 24.9072 18.9832 24.9658 17.6548C25.0244 16.3215 25.0391 15.8967 25.0391 12.5024C25.0391 9.10822 25.0341 8.68338 24.9755 7.35007ZM22.7242 17.5571C22.6704 18.7781 22.4654 19.4374 22.2944 19.8769C21.8744 20.966 21.01 21.8304 19.9209 22.2505C19.4813 22.4214 18.8172 22.6265 17.6011 22.6801C16.2824 22.7389 15.887 22.7534 12.5513 22.7534C9.21569 22.7534 8.81526 22.7389 7.50141 22.6801C6.28047 22.6265 5.62116 22.4214 5.18162 22.2505C4.63964 22.0502 4.1463 21.7328 3.74587 21.3176C3.33075 20.9123 3.01331 20.4239 2.813 19.8819C2.64207 19.4424 2.43699 18.7781 2.38338 17.5621C2.32462 16.2435 2.31012 15.8478 2.31012 12.5122C2.31012 9.17652 2.32462 8.77609 2.38338 7.46243C2.43699 6.24149 2.64207 5.58218 2.813 5.14264C3.01331 4.60047 3.33075 4.10732 3.75083 3.7067C4.15603 3.29158 4.64441 2.97414 5.18658 2.77402C5.62612 2.60309 6.29039 2.39801 7.50637 2.34421C8.82498 2.28564 9.22065 2.27095 12.5561 2.27095C15.8967 2.27095 16.2922 2.28564 17.606 2.34421C18.827 2.39801 19.4863 2.60309 19.9258 2.77402C20.4678 2.97414 20.9611 3.29158 21.3616 3.7067C21.7767 4.11209 22.0941 4.60047 22.2944 5.14264C22.4654 5.58218 22.6704 6.24626 22.7242 7.46243C22.7828 8.78105 22.7975 9.17652 22.7975 12.5122C22.7975 15.8478 22.7828 16.2385 22.7242 17.5571Z" />
          <path d="M12.5464 6.08029C9.00092 6.08029 6.12427 8.95676 6.12427 12.5025C6.12427 16.0481 9.00092 18.9246 12.5464 18.9246C16.0921 18.9246 18.9686 16.0481 18.9686 12.5025C18.9686 8.95676 16.0921 6.08029 12.5464 6.08029ZM12.5464 16.6683C10.2463 16.6683 8.38053 14.8028 8.38053 12.5025C8.38053 10.2021 10.2463 8.33656 12.5464 8.33656C14.8468 8.33656 16.7123 10.2021 16.7123 12.5025C16.7123 14.8028 14.8468 16.6683 12.5464 16.6683Z" />
          <path d="M20.7219 5.82637C20.7219 6.65432 20.0506 7.32565 19.2224 7.32565C18.3945 7.32565 17.7231 6.65432 17.7231 5.82637C17.7231 4.99823 18.3945 4.32709 19.2224 4.32709C20.0506 4.32709 20.7219 4.99823 20.7219 5.82637Z" />
        </symbol>
        <symbol width="25" height="25" viewBox="0 0 25 25" id="twitter">
        <path d="M25 4.74844C24.0703 5.15625 23.0797 5.42656 22.0469 5.55781C23.1094 4.92344 23.9203 3.92656 24.3016 2.725C23.3109 3.31562 22.2172 3.73281 21.0516 3.96563C20.1109 2.96406 18.7703 2.34375 17.3078 2.34375C14.4703 2.34375 12.1859 4.64688 12.1859 7.47031C12.1859 7.87656 12.2203 8.26719 12.3047 8.63906C8.04375 8.43125 4.27344 6.38906 1.74062 3.27813C1.29844 4.04531 1.03906 4.92344 1.03906 5.86875C1.03906 7.64375 1.95312 9.21719 3.31562 10.1281C2.49219 10.1125 1.68437 9.87344 1 9.49688C1 9.5125 1 9.53281 1 9.55312C1 12.0437 2.77656 14.1125 5.10625 14.5891C4.68906 14.7031 4.23438 14.7578 3.7625 14.7578C3.43438 14.7578 3.10312 14.7391 2.79219 14.6703C3.45625 16.7 5.34063 18.1922 7.58125 18.2406C5.8375 19.6047 3.62344 20.4266 1.22656 20.4266C0.80625 20.4266 0.403125 20.4078 0 20.3563C2.27031 21.8203 4.96094 22.6562 7.8625 22.6562C17.2937 22.6562 22.45 14.8438 22.45 8.07187C22.45 7.84531 22.4422 7.62656 22.4312 7.40938C23.4484 6.6875 24.3031 5.78594 25 4.74844Z"/>
        </symbol>
      </svg>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 88px auto 100px;
          justify-items: center;
          align-content: stretch;
          height: 100vh;
        }

        navbar {
          justify-self: stretch;
          left: 0px;
          right: 0px;
          top: 0px;
          bottom: 0px;
          background: #151417;
          border: 1px solid #151417;
          color: #f0f0f1;
          display: grid;
          grid-template-columns: 20% 12% auto 12% 20%;
          justify-items: center;
          align-items: center;
        }

        main {
          display: flex;
          flex-direction: row;
          justify-items: center;
          align-items: center;
          padding-right: 20%;
          padding-left: 20%;
        }

        footer {
          justify-self: stretch;
          left: 0px;
          right: 0px;
          top: 0px;
          bottom: 0px;
          background: #151417;
          border: 1px solid #151417;
          color: #f0f0f1;
          display: grid;
          grid-template-columns: 20% 15% auto 15% 20%;
          justify-items: center;
          align-items: center;
        }

        .navbar-options {
          display: flex;
          flex-direction: row;
        }

        .navbar-options div {
          padding: 16px;
          align-self: center;
          flex-grow: 2;
        }

        .navbar-option-hover {
          transition: 0.2s ease;
        }

        .navbar-option-hover:hover {
          color: var(--LEI3);
          transition: 0.2s ease;
        }

        .logo {
          grid-column-start: 2;
          grid-column-end: 3;
          justify-self: start;
          color: #ff5023;
        }

        .sign {
          justify-self: end;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .signup {
          display: flex;
          background-color: var(--LEI3);
          height: 46px;
          width: 94px;
          justify-content: center;
          align-items: center;
          margin-left: 32px;
          transition: 0.2s ease;
        }

        .signup:hover {
          background-color: var(--LEI3-1);
          transition: 0.2s ease;
        }

        .homepage-text {
          margin-left: 5%;
          text-align: center;
        }

        .homepage-body {
          margin-top: 5%;
        }

        .direitos {
          justify-self: start;
          grid-column-start: 2;
          grid-column-end: 3;
        }

        .made-with {
          justify-self: end;
        }

        .social svg {
          width: 25px;
          height: 25px;
          fill: var(--LEI5);
          transition: 0.2s ease;
        }

        .social a + a {
          margin-left: 25px;
        }

        .social svg:hover {
          fill: var(--LEI3);
          transition: 0.2s ease;
        }
      `}</style>

      <style jsx global>{`
        :root {
          --LEI1: #151417;
          --LEI2: #1f1e21;
          --LEI3: #ff5023;
          --LEI3-1: #ff7f5e;
          --LEI4: #4f73cf;
          --LEI5: #f0f0f1;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Gotham, "Inter", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
          background-color: var(--LEI1);
          color: var(--LEI5);
        }
        a:hover,
        a:visited,
        a:link,
        a:active {
          text-decoration: none;
        }

        .text-title {
          font-family: Gotham;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 26px;
          color: #f0f0f1;
        }

        .text-button {
          font-family: Gotham;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;

          color: #f0f0f1;
        }

        .text-subhead {
          font-family: Gotham;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 18px;
          color: #f0f0f1;
        }

        .text-body {
          font-family: Gotham;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }

        .text-footnote {
          font-family: Gotham;
          font-style: normal;
          font-weight: 500;
          font-size: 13px;
          line-height: 18px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
