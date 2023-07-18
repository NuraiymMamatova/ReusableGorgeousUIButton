import { styled } from "styled-components";
import "./App.css";
import { Button } from "./components/UI/Button";
import { useState } from "react";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const onDisableAll = () => {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  return (
    <StyledApp className="App">
      <ListOfButtons>
        <li>
          <Button
            disabled={isDisabled}
            hoverBackground={"#F3F3F3"}
            activeBackground={"#0052BC"}
            normalBackground={"#FFFFFF"}
            colorHoverOrNormal={"#1F6ED4"}
            colorDisabled={"#C9C9C9"}
            colorDefaultOrActive={"#FFFFFF"}
            borderHover={"3px solid #4C94F0"}
            boxShadow={"0px 6px 18px 0px rgba(31, 110, 212, 0.42)"}
            borderNormal={"1px solid #1F6ED4"}
            borderDisabled={"1px solid #C9C9C9"}
            boxShadowDisabled={"0px 6px 18px 0px rgba(210, 210, 210, 0.42)"}
            padding={"16px 68px"}
          >
            OUTLINED
          </Button>
        </li>
        <li>
          <Button
            disabled={isDisabled}
            hoverBackground={"#4C94F0"}
            activeBackground={"#0052BC"}
            normalBackground={"#1F6ED4"}
            disabledBackground={"#C9C9C9"}
            colorHoverOrNormal={"#FFFFFF"}
            colorDisabled={"#FFFFFF"}
            boxShadow={"0px 6px 18px 0px rgba(31, 110, 212, 0.42)"}
            boxShadowDisabled={"0px 6px 18px 0px rgba(210, 210, 210, 0.42)"}
            padding={"16px 68px"}
          >
            CONTAINED
          </Button>
        </li>
        <li>
          <Button
            disabled={isDisabled}
            hoverBackground={"#FF912B"}
            activeBackground={"#CF6300"}
            normalBackground={"#F37705"}
            disabledBackground={"#C9C9C9"}
            colorHoverOrNormal={"#FFFFFF"}
            colorDisabled={"#FFFFFF"}
            padding={"14px 32px"}
          >
            WARNING
          </Button>
        </li>
        <li>
          <Button
            disabled={isDisabled}
            hoverBackground={"#E54343"}
            activeBackground={"#C20B0B"}
            normalBackground={"#DF2D2D"}
            disabledBackground={"#C9C9C9"}
            colorHoverOrNormal={"#FFFFFF"}
            colorDisabled={"#FFFFFF"}
            padding={"14px 32px"}
          >
            DANGER
          </Button>
        </li>
      </ListOfButtons>
      <Button padding={"16px 68px"} onClick={onDisableAll}>
        Click me!
      </Button>
    </StyledApp>
  );
}

export default App;

const ListOfButtons = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 10px;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 100px;
`;
