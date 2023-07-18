import React from "react";
import { styled } from "styled-components";

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  border: none;
  background-color: ${(p) => p.normalBackground};
  border: ${(p) => p.borderNormal};
  box-shadow: ${(p) => p.boxShadow};
  color: ${(p) => p.colorHoverOrNormal};
  border-radius: 10px;
  padding: ${(p) => p.padding};
  &:hover:not(:disabled) {
    background-color: ${(p) => p.hoverBackground};
    border: ${(p) => p.borderHover};
  }
  &:active:not(:disabled) {
    background-color: ${(p) => p.activeBackground};
    color: ${(p) => p.colorDefaultOrActive};
    border: none;
  }

  &:disabled {
    color: ${(p) => p.colorDisabled};
    border: ${(p) => p.borderDisabled};
    box-shadow: ${(p) => p.boxShadowDisabled};
    background-color: ${(p) => p.disabledBackground};
  }
`;
