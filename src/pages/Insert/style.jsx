import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--height-header-mobile);
    padding-bottom: 25px;
    background: var(--container-background);

    @media (max-width: 450px) {
        margin-top: var(--height-header-mobile);
        margin-bottom: var(--height-header-mobile);
    }

    @media (min-width: 450px) {
        margin-top: var(--height-header-desktop);
    }
`

const Title = styled.h1`
    font-size: var(--main-title-size);
    text-align: center;
    color: var(--title-font-color);
    margin-top: var(--title-margin-top);
    margin-bottom: var(--title-margin-bottom);
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--inputs-gap);
`
const Input = styled.input`
    width: var(--inputs-width);
    height: var(--inputs-height);
    border-radius: var(--inputs-radius);
    padding-left: var(--inputs-padding-left);
`
const SelectSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--select-gap);
    width: 350px;
`
const Select = styled.div`
    width: var(--select-width);
    height: var(--select-heigth);
    color: var(--select-color);
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: var(--select-background);
    border: ${(props) => props.selected? "3px solid #4fea17" : "none"};
    border-radius: var(--select-radius);
    cursor: pointer;
`
const Button = styled.button`
    width: var(--inputs-width);
    height: var(--button-height);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    border-radius: var(--inputs-radius);
    color: var(--button-text-color);
    background-color: var(--button-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    pointer-events: ${(props) => props.selected? "none" : "auto"};
    cursor: pointer;
`
export {
    Container,
    Title,
    Input,
    Inputs,
    SelectSection,
    Select,
    Button
}