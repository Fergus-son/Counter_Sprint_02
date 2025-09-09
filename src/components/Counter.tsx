import { useState } from "react";
import styled from "styled-components";

type NumberType = {
    numberMax: boolean
}

const Counter = () => {
    const [number, setNumber] = useState(0)


    const increment = () => {

        let currentNumber = number

        if (currentNumber <= 4) {
            currentNumber++
        }
        console.log(currentNumber)
        return setNumber(currentNumber)
    }

    const reset = () => {
        setNumber(0)
    }

    const set = () => {

    }

    return (
        <GlobalContainer>
            <Container>
                <ValueContainer>
                    <SetContainer>
                        max value: <br /> <br />
                        start value:
                    </SetContainer>
                    <InputContainer>
                        <Input />
                        <Input />
                    </InputContainer>
                </ValueContainer>
                <ButtonContainerSet>
                    <Button onClick={() => reset()}>set</Button>
                </ButtonContainerSet>
            </Container>

            <Container>
                <CounterContainer>
                    <Number numberMax={number === 5}>{number}</Number>
                </CounterContainer>
                <ButtonsContainerCounter>
                    <Button onClick={() => increment()}>inc</Button>
                    <Button onClick={() => reset()}>reset</Button>
                </ButtonsContainerCounter>
            </Container>
        </GlobalContainer>
    );
};

const GlobalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px; 
    border: 2px solid #4ec6f8;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    background-color: #2b2d33;
`;


const ButtonContainerSet = styled.div`
    border: 2px solid #4ec6f8;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    gap: 60px;
    padding: 10px 95px 10px 95px;

`;

const ButtonsContainerCounter = styled.div`
    border: 2px solid #4ec6f8;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    gap: 60px;
    padding: 10px 20px 10px 20px;
`;

const Button = styled.button`
    padding: 2px 15px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 10px;
    background-color: #4ec6f8;
    color: #2b2d33;
`;

const Number = styled.div <NumberType>`
    font-size: 50px;
    font-weight: bold;
    color: ${(props) => (props.numberMax ? "red" : "#4ec6f8")}
`;

const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #4ec6f8;
    border-radius: 10px;
    width: 260px;
    height: 110px;
`;

const ValueContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #4ec6f8;
    border-radius: 10px;
    width: 260px;
    height: 110px;
`;

const Input = styled.input`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 20px;
    border: 2px solid #4ec6f8;
    border-radius: 5px;
    text-align: center;
`

const SetContainer = styled.div`
    color: #4ec6f8;
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default Counter;