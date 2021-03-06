import styled from 'styled-components';
import { size } from '../../components/devicesWidth.styled';


export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 240px);
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    
    @media  (max-width: ${size.mobileL}) {
        width: 100%;
    }
`;

export const InputData = styled.input<{error: boolean}>`
    width: 95%;
    height: 35px;
    border: ${props => props.error ? '2px solid red' : '2px solid black'};
    margin: 10px 0;
    font-size: 14px;
    padding-left: 14px;

    &::placeholder {
        color: ${props => props.error ? 'red' : 'black'};
        opacity: 1;
        font-weight: bold;
    }
`;

export const RegistryButton = styled.button`
    width: 100%;
    height: 40px;
    border: 2px solid black;
    background-color: black;
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color: #aaa;
        color: black;
    }
`;

export const ErrorInfo = styled.span`
    width: 100%;
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const DateContainer = styled.div`
    width: 100%;
    height: 30px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
`;

export const ItemSelect = styled.select`
    flex: 0.3;
    border: 2px solid black;
`;

export const ItemOption = styled.option`

`;