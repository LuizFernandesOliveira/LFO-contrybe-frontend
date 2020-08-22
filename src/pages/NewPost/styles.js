import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10px;
    }

    section img {
        max-width: 200px;
        padding: 10px 0;
    }
    section a {
        border-bottom: 4px solid var(--color-menu-bg);
        margin-bottom: 10px;
        padding-bottom: 10px;
    }

    section h1{
        font-size: 32px;
        padding: 10px 5px;
        align-self: center;
    }

    section p{
        font-size: 18px;
        text-align: justify;
        align-self: center;
    }

    form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media(min-width: 820px){
        section {
            max-width: 820px;
        }   
    }
    @media(min-width: 1200px){
        section {
            max-width: 1200px;
        }   
    }


`