import styled from "styled-components";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;