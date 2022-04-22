import styled from 'styled-components'

export const Container = styled.div`
    background-color: #DCDCDC;
    padding: 4rem 2rem;
    border-radius: 1.5rem;
    font-size: 1.5rem;

    p + p {
        margin-top: 10px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`

export const ContainerImg = styled.div`
    border-radius: 1.5rem;
    overflow: hidden;
    margin-bottom: 30px;

    img {
        max-width: 100%;
        display: block;
    }
`