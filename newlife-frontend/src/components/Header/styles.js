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

            display: none;
            
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
                    display: none;
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
                    display: none;
                }
            }
        }
    }
}
`;

export const ContainerSidebar = styled.div`
padding-top: 10px;
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
        padding: 10px 10px;
        margin: 10px 10px;
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
@media only screen and (max-width: 720px) {
    header{
        width: 100%;
        height: 100px;
    }
}
`;
export const ButtonNav = styled.div`
display: none;

@media only screen and (max-width: 720px) {
    display: inline-block;
    width: 100%;
    height: 50px;
    background: white;
    margin: 0;

    button.active{
        display: ${props => props.inline[0] ? "inline-block": "none"};
        opacity: 1;
        width: 100%;
        background-color: #64b5f6;
        border: none;
        transition: opacity 0.6s;
    }
    button.active:hover{
        opacity: 0.8;
    }
    button.deactive{
        display: ${props => props.inline[1] ? "inline-block": "none"};
        opacity: 1;
        width: 100%;
        background-color: #64b5f6;
        border: none;
        transition: opacity 0.6s;
    }
    button.deactive:hover{
        opacity: 0.8;
    }
}
`;

export const ContainerNav = styled.div`
display: flex;
justify-content: center;
background: white;
margin: 0;

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
@media only screen and (max-width: 720px) {
    nav{
        display: ${props => props.act ? "inline-block": "none"};
        height: 100%;

        ul{
            flex-direction: column;

            li{
                width: 100%;
                & + li {
                    border-left: none;
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                }
                display: inline;
                padding: 10px 10px;
                a{
                    display: inline-block;
                    width: 100%;
                    text-decoration: none;
                }
            }
        }
    }
}
`;