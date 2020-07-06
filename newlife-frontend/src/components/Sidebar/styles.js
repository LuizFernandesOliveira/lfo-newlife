import styled from 'styled-components'

export const Container = styled.div`
background: blue;
nav{
    width: 80%;
    height: 100px;
    display: flex;
    justify-content: center;

    header{
        align-items: center;
        div.img-logo{
            width: 100%;
            border: 1px solid black;
            img{
                width: calc(40vmin + 10%);
            }
            
        }
        div.cart{
            width: 100%;
            border: 1px solid black;
            p{

            }
        }
    }

    div{

    }
}

`;