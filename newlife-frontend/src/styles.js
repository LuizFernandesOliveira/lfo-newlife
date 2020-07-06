import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }
    body {
        background: #ede7f6;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
    ul {
        list-style: none;
    }
`;