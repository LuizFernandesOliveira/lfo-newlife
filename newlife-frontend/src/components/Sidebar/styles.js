import styled from 'styled-components'

export const Container = styled.div`
padding: 0;
margin: 0;
background: #0297d9;
position: relative;
div{
    display: flex;
    justify-content: space-around;
    div.text{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        p{
            font-size: 40px;
            color: white;
            text-shadow: 0.1em 0.1em 0.05em #333;
            strong{
                border: none;
                border-top-left-radius: 1em 5em;
                border-bottom-right-radius: 1em 5em;
                font-size: 50px;
                padding: 0 6px;
                margin: 4px 10px;
                box-shadow: 0 0 5px 1px black;
                background: orange;
            }
        }
    }
    div.img-text{
        width: 100%;
        box-sizing: border-box;
        img{
            width: calc(50vmin + 40px);
            padding: 10px;
        }
    }
}
button{
    position: absolute;
    top: calc(38vmin + 5px);
    left: 300px;
    padding: 10px 30px;
    box-shadow: 0 0 4px 2px black;
    background: orange;
    border-radius: 10px;
}
@media only screen and (max-width: 940px) {
    div{
        flex-direction: column;
        justify-content: center;
    
        div.img-text{
            width: 100%;
            box-sizing: border-box;
            img{
                width: 100%;
                padding: 10px;
            }
        }
    }
    button{
        top: calc(25vmin + 40px);
        left: 450px;
        padding: 10px 30px;
        box-shadow: 0 0 4px 2px black;
        background: orange;
        border-radius: 10px;
    }
}

@media only screen and (max-width: 640px) {
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    
        div.img-text{
            width: 100%;
            box-sizing: border-box;
            img{
                width: 100%;
                padding: 10px;
            }
        }
    }
    button{
        top: calc(35vmin + 40px);
        left: 250px;
        padding: 10px 30px;
        box-shadow: 0 0 4px 2px black;
        background: orange;
        border-radius: 10px;
    }
}
`;