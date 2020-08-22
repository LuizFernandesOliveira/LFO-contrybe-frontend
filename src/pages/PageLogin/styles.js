import styled from 'styled-components'

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    img {
        width: 100%;
        max-width: 400px;
        padding: 0 50px;
    }

    form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin-top: 30px;
        border-bottom: 1px solid var(--color-button);
    }

    form h1 {
        padding: 10px 5px;
    }

`