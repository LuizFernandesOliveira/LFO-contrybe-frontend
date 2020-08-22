import styled from 'styled-components';

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    section {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    section img {
        width: 100%;
        max-width: 400px;
        padding: 0 50px;
    }

    section h1{
        font-size: 32px;
        padding: 10px 5px;
    }

    section p{
        font-size: 18px;
        text-align: justify;
    }


    form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  
`
