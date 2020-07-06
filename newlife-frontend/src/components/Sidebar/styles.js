import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
background: white;
header{
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.img-logo{
        img{
            width: calc(40vmin + 10%);
        }
            
    }

    div.cart{
        display: flex;
        align-items: center;
        p{
            
        }
    }
}
@media only screen and (max-width: 960px) {
    header{
        width: 100%;
        height: 100px;
        div.img-logo{
            width: 50%;
        }

        div.cart{
            width: 50%;
            justify-content: flex-end;
        }
    }
}
`;