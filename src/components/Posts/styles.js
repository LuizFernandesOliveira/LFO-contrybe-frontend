import styled from 'styled-components';

export const Container = styled.ul`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--color-button);
        padding: 20px;
    }
    h2{
        color: gray;
        font-weight: 400;
        padding: 20px;
    }
    h2 strong {
        color: var(--color-button);
    }
    h2 strong:last-child{
        margin-left: 20px;
    }


    li.post-item{
        width: 100%;
        max-width: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        background: var(--color-li);
        border-radius: 10px;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        position: relative;
        border: 1px solid var(--color-button);
    }
    li.post-item div.user {
        padding: 5px;
        width: 100%;
        display: flex;
    }
    li.post-item div.user strong {
        padding-right: 5px;
    }
    li.post-item .about {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    li.post-item .about {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 4px;
    }

    li.post-item .about .details {
        display: flex;
        flex-direction: column;
    }

    li.post-item .about .details div{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 4px;
    }

    li.post-item .about .details div strong {
        margin-right: 5px;
    }

    li.post-item .btn-delete {
        margin-top: 4px;
        padding: 4px;
        border: 1px solid var(--color-button);
        border-radius: 8px;
        line-height: 16px;
        position: absolute;
        top: 10px;
        right: 10px;
    }


    @media(min-width: 820px){
        max-width: 820px;
        display: block;
        align-items: unset;
        justify-content: unset;
        
        li.post-item{
            float: left;
            margin-left: 20px;
        }
    }
`