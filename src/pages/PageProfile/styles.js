import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;

    header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10px;
    }
    .content{
        width: 100%;
        max-width: 820px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }

    header img{
        max-width: 200px;
        padding: 10px 0;
    }

    header div.profile{
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        font-size: 18px;
        padding: 0 0 20px 0;
        border-bottom: 4px solid var(--color-menu-bg);
    }
    header div:last-child{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .btn-menu-active{ 
        padding: 5px 10px;
        display: ${props => props.navActive ? "inline" : 'none'};
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-button);
        border-radius: 4px;
        z-index: 2;
        background: var(--color-menu-bg);
        margin-top: 5px;
    }
    header .button{
        align-self: center;
    }

    header div span:last-child{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    header div span button{
        padding: 4px;
        background: white;
        box-shadow: 0 0 0.2px 0.1px var(--color-buttons);
        border-radius: 4px;
    }

    @media(min-width: 820px){
        header{
            max-width: 820px;
        }
    }

    @media(min-width: 1200px){
        .btn-menu-active, .btn-menu-deactive {
            display: none;
        }
        header,.content{
            max-width: 1200px;
            font-size: 20px;
        }
        .content{
            display: grid;
            grid-template-columns: 380px 820px;
            grid-template-areas: "menus posts";
            padding: 10px;
        }
    }


`