import styled from 'styled-components'

export const Container = styled.div`
background: #e3f2fd;
padding: 30px;
display: flex;
justify-content: space-between;
div{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    ul{
        li{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

@media only screen and (max-width: 720px) {

    flex-direction: column;

}
`;