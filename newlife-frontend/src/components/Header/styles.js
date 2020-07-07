import styled from 'styled-components'

export const ContainerHeader = styled.div`
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

export const ContainerSidebar = styled.div`
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
        padding: 0 10px;
        img{
            width: calc(40vmin + 10%);
        }
    }

    div.cart{
        padding: 0 10px;
        a{
            display: flex;
            align-items: center;
            text-decoration: none;
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

export const ContainerNav = styled.div`
display: flex;
justify-content: center;
background: white;
nav{
    width: 80%;
    height: 50px;
    

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
         

        li{
            & + li {
                border-left: 1px solid rgba(0, 0, 0, 0.1);
            }
            display: inline;
            padding: 10px 10px;
            a{
                text-decoration: none;
            }
        }
    }
}
`;