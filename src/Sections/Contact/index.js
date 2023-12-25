import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  // background-color: #0a0b10;
  background: linear-gradient(to right, #74D43F, #007BFF);
  // height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(100%) sepia(200%) saturate(580%) hue-rotate(90deg)
        brightness(100%) contrast(97%);
        // background-color: #ff8c00;
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: var(--black);
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
      background-color: #74D43F;
      color: var(--white);
    }
    &:hover {
      box-shadow: 0 0 10px rgba(116, 212, 63, 0.8); /* Adjust the color and size of the glow as needed */
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/" target="_blank">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/dopamine-art-s-1b31692a6/" target="_blank">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/Dopamineees" target="_blank">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/dopa_mine_arts?igsh=YWQzMXpnbDkzY2Qw" target="_blank">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      {/* <Form>  
        action="" class="contact__form" id="contact-form"
        <Row>
          <input name="name" type="text" placeholder="your name" id="name"/>
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
            id="email"
          />
        </Row>
        <textarea
          name=""
          id="message"
          cols="30"
          rows="2"
          placeholder="your message"
        ></textarea>
        <p class="conatact__message" id="contact-message"></p>
        <div style={{ margin: "0 auto" }}>
          <button class="btn btn-primary"
            onClick="sendMail()"
          >
            Submit
          </button>
        </div> */}
      {/* </Form> */}
    </ContactSection>
    
  );
};

export default Contact;

