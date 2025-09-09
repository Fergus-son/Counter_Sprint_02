import { useState } from "react";
import styled from "styled-components";

type NumberType = {
    isMax: number;
}

const Counter = () => {
    const [number, setNumber] = useState(0)


    const increment = () => {

        let currentNumber = number

        if (currentNumber <= 4) {
            currentNumber++
        }
        console.log(currentNumber)
        setNumber(currentNumber)
    }

    const reset = () => {
        setNumber(0)
    }

    return (
        <GlobalContainer>
            <Container>
                <Number isMax={number === 5}>{number}</Number>
                <Buttons>
                    <Button onClick={() => increment()}>inc</Button>
                    <Button onClick={() => reset()}>reset</Button>
                </Buttons>
            </Container>
        </GlobalContainer>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px; 
    border: 3px solid blue;
    border-radius: 10px;
    padding: 50px;
    display: flex;
    background-color: cadetblue;
`;

const GlobalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Buttons = styled.div`
    border: 3px solid blue;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    gap: 8px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 10px;
    background-color: blue;
    color: white;
`;

const Number = styled.div <NumberType>`
    font-size: 50px;
    font-weight: bold;
    color: ${(props) => (props.isMax ? "red" : "black")}
`;

export default Counter;