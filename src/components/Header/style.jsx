import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: var(--height-header-mobile);
    display: flex;
    /* justify-content: center; */
    background-color: #4fea17;
    position: fixed;
    top: 0;
    z-index: 5;
    
    @media (max-width: 450px) {
        height: var(--height-header-mobile);
    }
    
    @media (min-width: 450px) {
        height: var(--height-header-desktop);
        left: var(--sidebar-width);
        right: var(--sidebar-width);
    }
`

const SubContainer = styled.div`
    /* min-width: var(--subcontainer-width); */
    /* max-width: var(--subcontainer-max-width); */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;     
    background-color: red;
`
const Icon = styled.p`
    font-size: var(--icon-size-mobile);
    margin-right: 20px;
    cursor: pointer;
    
    @media (min-width: 450px) {
        font-size: var(--icon-size-desktop);
        margin-right: 120px;
    }
`
const Logo = styled.img`
     max-width: var(--logo-header-mobile);
     padding-top: var(--logo-header-top);

     @media (min-width: 450px) {
        max-width: var(--logo-header-desktop);
        padding-top: 20px;
    }
`
export {
    Container,
    SubContainer,
    Logo,
    Icon
}