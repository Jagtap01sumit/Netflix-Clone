import React from 'react'
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
export default function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <Header />

      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere. Cancle anytime</h4>

          <h6>Ready to watch? Enter your email to create or restart membership</h6>      </div>
      </div>
      <div className="form">
        <input type="email" placeholder='email address' name='email' />
        <input type="password" placeholder='password' name='password' />
        <button>Get Started</button>
      </div>
      <button>Login</button>
    </Container>
  )

}
const Container = styled.div``;