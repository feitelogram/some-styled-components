import React from 'react';
import funky from "./funky.jpg"
import './App.css';
import styled from "styled-components"

const Button = styled.a.attrs(props => ({target: "_blank", rel: "noopener noreferrer"}))`
font-size: 1.2em;
margin: 1em;
padding: 0.25em .5em;
border: 2px solid palevioletred;
border-radius: 3px;
display: inline-block;
text-decoration: none;
font-weight: bolder;
background-color: green;
`

const JamButton = styled(Button)`
  background-color: orange;
  font-family: 'Lacquer', sans-serif;
`

const GrooveButton = styled(Button)`
    border: 5px solid red;
    border-radius: 25px;
    font-family: 'Akronim', cursive;
`
const SexButton = styled(Button)`
  background-color: pink;
  font-family: 'Lobster', cursive;
  border: 10px solid green;
`

const Wrapper = styled.div`
  padding: 1.3rem 0 0;
  &:hover ${JamButton} {
    background-color: red;
  }
  &:hover ${GrooveButton} {
    background-color: grey;
  }
  &:hover ${SexButton} {
    background-color: darkred;
  }
`

const App= () => {
  return (
    <div className="App">
        <img src={funky} className="App-logo" alt="logo" />
        <Wrapper>
          <JamButton href="https://www.youtube.com/watch?v=9EcjWd-O4jI">PUMP UP THE JAMS</JamButton>
          </Wrapper>
          <Wrapper>
          <GrooveButton href="https://www.youtube.com/watch?v=etviGf1uWlg">GROOVE IS WHERE, AGAIN?</GrooveButton>
          </Wrapper>
          <Wrapper>
          <SexButton href="https://saa-recovery.org/">UP ALL NIGHT TO GET LUCKY</SexButton>
          </Wrapper>
    </div>
  );
}

export default App;
