import styled from 'styled-components'

export const Container = styled.div`
margin: 0;
display: flex;
justify-content: center;
background: #0297d9;

header{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: row;
        p{
            text-align: center;
            padding: 4px 10px;
            a{
                color: white;
                text-decoration: none;
                padding: 0 6px;
            }
        }

        ul{
            
            li{
                display: inline;
                padding: 4px 10px;
                a{
                    text-decoration: none;
                }
            }
        }
    }
}
@media only screen and (max-width: 920px) {
  
}

@media only screen and (max-width: 740px) {
    header{
        width: 100%;
        div{
            width: 50%;
            flex-direction: column;
        }
    }
}
`;