import  styled  from "styled-components";

export const AppCOntainer = styled.div`
height: 37vh;
display: flex;
justify-content: center;
padding: 300px; 1

background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.color};
transition: background-color 0.8s linear, color 0.5s linear;  
`;

export const MainSection = styled.div`
  text-align: center;
`;
