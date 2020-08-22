import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 16px Roboto, sans-serif;
        background: var(--site);
        -webkit-font-smoothing: antialiased;
        color: var(--color-font);
        
    }
    body::-webkit-scrollbar{
        width: 0;
    }

    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }

    form input {
        width: 100%;
        height: 50px;
        color: #333;
        background: var(--color-button-bg);
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    form textarea {
        width: 100%;
        resize: vertical;
        min-height: 140px;
        height: 50px;
        color: #333;
        border: 1px solid var(--color-button);
        background: var(--color-button-bg);
        border-radius: 10px;
        padding: 16px 24px;
        line-height: 24px;
    }

    .button {
        width: 100%;
        height: 50px;
        max-width: 200px;
        background: #28a745;
        border: 0;
        border-radius: 10px;
        color: var(--color-button-bg);
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 50px;
        transition: filter 0.2s;
    }

    .button:hover {
        filter: brightness(90%);
    }

    .link{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: var(--color-menu-hover);
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2;
    }

    .link svg {
        margin-right: 8px;
    }

    .link:hover{
        opacity: 0.8;
    }
    @media(min-width: 1200px){
        font-size: 18px;
    }

    :root {
        --site: rgb(223, 250, 223);
        --color-button: #28a745;
        --color-button-bg: rgb(248, 248, 248);
        --color-li: rgb(196, 231, 163);
        --color-menu: #1d993a;
        --color-menu-bg: #c7e9cf;
        --color-menu-hover: #0c6b22;
        --color-font: #475550;
    }

`