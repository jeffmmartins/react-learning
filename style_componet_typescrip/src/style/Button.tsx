import styled, {css} from "styled-components";

interface IStyledButtonProps{
    buttonSize: "lg" | "sm"
}

export const StyledButton = styled.button<IStyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${({buttonSize}) => {
        switch (buttonSize){
            case "lg" :
                return css`
                padding: 0 30px;
                height: 5rem;
                `
                    
                
            case "sm":
                return css`
                padding: 0 15px;
                height: 3rem;
                `
        }
    }}
`