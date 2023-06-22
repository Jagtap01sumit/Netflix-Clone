import React from 'react'
import background from "../assets/login.jpg"
import styled from "styled-components"
export default function BackgroundImage() {
  return (
<container>
    <img src={background} alt="" />
</container>
  )
}
const Container = styled.div``;