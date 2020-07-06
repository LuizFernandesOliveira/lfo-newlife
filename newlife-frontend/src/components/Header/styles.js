import styled from 'styled-components'

export const Container = styled.div`
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
            font-weight: 500;
            line-height: calc(100% - 2px);
            a{
                color: white;
                text-decoration: none;
                padding: 0 6px;
                transition: color 1s;
            }
            a:hover {
                color: red;
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
@media only screen and (max-width: 960px) {
    header{
        width: 90%;
        div{
            width: 100%;
            flex-direction: column;
            ul{
                display: flex;
                li{
                    display: inline-block;
                }
            }
        }
    }
}

@media only screen and (max-width: 740px) {
    header{
        width: 100%;
        div{
            width: 50%;
            flex-direction: column;
            ul{
                display: flex;
                li{
                    display: inline-block;
                }
            }
        }
    }
}
`;