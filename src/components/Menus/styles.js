import styled from 'styled-components';

export const Container = styled.nav`

    max-width: 340px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 0px 0px 1px 4px var(--color-menu-bg);
    border-radius: 10px;
    position: relative;

    h2 {
        width: 250px;
        text-align: center;
        background: var(--color-menu-bg);
        padding: 5px 10px;
        margin: 4px 10px;
        color: var(--color-button);
        font-weight: bold;
        border-radius: 5px;
        border-bottom: 1px solid var(--color-button);
    }
    ul{
        margin-left: 60px;
        height: 60vh;
        overflow-y: auto;
    }
    ul::-webkit-scrollbar{
        width: 0;
    }

    li.menu-item {
        margin-top: 10px;
        font-size: 24px;
        font-weight: bold;
        list-style: none;
        padding: 5px 0;
    }
    li.menu-item a{
        padding: 5px 30px;
        text-decoration: none;
        color: var(--color-menu);
    }
    .btn-menu-deactive{ 
        padding: 5px 10px;
        display: ${props => props.navActive ? 'none' : 'inline'};
        align-items: center;
        justify-content: center;
        border: unset;
        border-bottom: 1px solid var(--color-button);
        border-radius: 4px;
        z-index: 3;
        background: var(--color-menu-bg);
        position: absolute;
        top: 7px;
        left: 10px;
    }
 
    @media(max-width: 1200px){
        display: ${props => props.navActive ? 'none' : 'flex'};
    }

    @media(min-width: 1200px){
        width: 100%;
        display: flex;

        h2{
            width: 320px;
        }

        ul{
            margin-left: 100px;
        }

        li.menu-item:hover, li.menu-item:active {
            margin-left: 30px;
            border-left: 4px solid var(--color-menu-hover);
            transition: margin-left 0.5s;
        }
    }
`