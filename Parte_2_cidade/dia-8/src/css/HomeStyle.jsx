import styled from "styled-components";
export const HomeStyle = styled.section `

.home{
    grid-area:home;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.video{
    position:absolute;
    width:100%;
    height:100vh;
    object-fit:cover;
    z-index:-1;
}

h1{
    font-size:3rem;
    color:#fff;
    animation:efeito 1.7s infinite alternate;
}

@keyframes efeito{
    0%{
        transform:scale(1.1)
    }
    100%{
        transform:scale(0.8,0.8)
    }
}

`