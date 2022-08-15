import styled from "styled-components";

const Container = styled.div`
    min-width: var(--width-mobile);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: var(--height-header-mobile);
    padding-bottom: 50px;
    background: var(--container-background);

    @media (max-width: 450px) {
        margin-top: var(--height-header-mobile);
        margin-bottom: var(--height-header-mobile);
    }

    @media (min-width: 450px) {
        margin-top: var(--height-header-desktop);
        margin-bottom: var(--height-header-desktop);
    }
`
const Title = styled.h1`
    font-size: var(--main-title-size);
    text-align: center;
    color: var(--title-font-color);
    margin-top: var(--title-margin-top);
`
const SubContainer = styled.div`
    min-width: var(--subcontainer-width);
    max-width: var(--subcontainer-max-width);
    width: 80%;
    border: ${(props) => props.selected ? "3px solid red" : "3px solid #90388C"};
    padding: 10px 0;
    display: flex;
    position: relative;
    background-color: ${(props) => props.selected ? "#ffd56b" : "none"};

        div {
            display: flex;
            flex-direction: column;
            gap: var(--subcontainer-div-gap);
        }

        h2 {
            font-size: var(--subcontainer-font-size);
        }
`
const ClientContainer = styled.div`
    padding-left: 15px;
    max-width: 700px;
    display: flex;
    word-wrap: break-word;  
    position: relative;

        h2 {
            font-size: 20px;
        }

    @media (max-width: 400px) {
        max-width: 300px;
        word-wrap: break-word;
    }
`
const IconWhatsApp = styled.p`
    display: ${(props) => props.selected? "block" : "none"};
    font-size: var(--icon-size-desktop);
    color: #41A918;
    position: absolute;
    top: 110px;
    right: 20px;
    cursor: pointer;

    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
`
const IconDelete= styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    top: 60px;
    right: 20px;
    cursor: pointer;

    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
`
const IconUpdate = styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;

    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
`
export {
    Container,
    Title,
    SubContainer,
    ClientContainer,
    IconWhatsApp,
    IconDelete,
    IconUpdate,
}