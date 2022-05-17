import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'


// Navbar------------------------------------------------------------------------------------------------------------------------------------------
export const Sidebar = styled.div`
margin: 10px;
position: fixed;
top: 0px;
left: 0px;
height: 97%;
background: #0032b5;
z-index: 1000;
transition: all 0.5s ease;
border-radius: 25px;
box-shadow: 4px 1px 5px -1px #7c7c7c8c;
width: ${props => props.show ? '260px' : '78px'};

@media screen and (max-width:768px){
    height:${props => props.show ? '97%' : '50px'};
    width: ${props => props.show ? '260px' : '50px'};
    border-radius: ${props => props.show ? '25px' : '100px'};

}
`
export const NavLogo = styled.div`
height: 60px;
width: 100%;
display: flex;
align-items: center;

img {
    margin: 30px 15px auto 15px;
    width: 45px;
}
@media screen and (max-width:768px){
    margin: ${props => props.show ? '0' : '-4px 7px'};
    transition: all 0.4s ease;
    
    img {
        margin:${props => props.show ? '30px 15px auto 15px' : '0'};
        width:${props => props.show ? '45px' : '35px'};
        transition: all 0.4s ease;

    }
}
.LinkName{
    display:${props => props.show ? 'block' : 'none'};
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    transition: all 0.4s ease;
    margin: 30px 15px auto 15px;
}
`
export const NavLinks = styled.div`
    height: 100%;
    padding: 30px 0 150px 0;
    .nav-links::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width:768px){
        display: ${props => props.show ? 'block' : 'none'};
    }
`

export const Nav_link = styled(Link)`
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
    height: 80px;
    display: flex;
    text-decoration: none;
    margin-bottom:5px;
    .IconNav{
        min-width: 78px;
        text-align: center;
        line-height: 50px;
        color:white;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 18px 0;
    }
    .LinkName{
        opacity:${props => props.show ? '1' : '0'};
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        transition: all 0.4s ease;
        margin:25px 20px;
    }
    .LinkText{
        position: absolute;
        height: 80px;
        background: #6dd4f7 !important;
        margin-top: 0;
        border-radius: 0 6px 6px 0;
        opacity: 0;
        top: 0px;
        opacity: 0;
        pointer-events: auto;
        transition: all 0.4s ease;
        color:#fff;
        width:max-content;
        left:95%;
    }
    .link{
        margin:0 20px;
        margin-top:25px;
        }
    &:hover,&.active{
        background: #6dd4f7 !important;
        border-radius: 15px 0 0 15px;
    }
    &:hover,&.active .IconNav{
        color:#02155A;
         transition: all 0.4s ease;

    }
    &.active .LinkName{
        color:#02155A;
    }
    &:hover .link{
        top: 0;
        opacity: 1;
        pointer-events: auto;
        transition: all 0.4s ease;
        display:block;
    }
    &:hover .LinkText{
        opacity:1;
        display:${props => props.show ? 'none' : 'block'};
        top:0;
        left:100%;
        transition: all 0.4s ease;
        cursor: pointer;
    }
    .LinkText .link:hover{
        color:#02155A;
        transition: all 0.4s ease;

    }

    @media screen and (max-width:768px){
        &:hover .LinkText{
            display:none;
        }
    }
`

// Profilebar------------------------------------------------------------------------------------------------------------------------------------------
export const ProfileBarContainer = styled.div`
z-index:1000;
`
export const ProflieIcon = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    padding: 5px;
    margin: 10px;
    color: #0032b5;
    z-index: 100;
    display: flex;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 2px 2px 5px #5c5c5c8c;

    p {
        font-size: 15px;
        margin: 5px;
    }

    .IconProfile{
        margin: 0 5px;
        margin-top: 3px;
        
    }
   &:hover {
        color: #6dd4f7;
        transition:all 0.5s ease;
        background: #ffffff;
        box-shadow: inset 5px 5px 5px #dbdbdb,
            inset -5px -5px 5px #ffffff;
    }


`

export const ProfileBar = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.ShowProfileBar ? '0' : '-450px'};
    height: 100%;
    width: 400px;
    background: #fff;
    z-index: 100;
    transition: all 0.5s ease;
    border-top-left-radius: 15px;
    box-shadow: 5px 10px 10px 8px #5c5c5c8c, -5px -10px 10px #0000001c;
`

export const Formbox = styled.div`
    margin: 10px 5%;
    .IconForm{
        margin:0;
        font-size: 50px;
        color: #0032b5;
        height:50px;
        width:fit-content;
    }
    .IconForm:hover{
        color:#6dd4f7;
        transition: all 0.5s ease;
    }
    .IconProfile{
        color:#00288F;
        font-size:72px;
        margin:0 40%;
        height:110px;
    }
    .HeaderForm{
        text-align:center;
        font-weight:500;
        color:#02155A;
    }
    .formbox{
        margin:5% 10%;
    }
    .inputform{
        border:2px solid #C2DBFE;
        margin-bottom:5px;
    }
    .forgotpsw{
        font-size:14px;
        color:#0d6efd;
    }
    .signup:hover,.forgotpsw:hover{
        color:#02155A;
    }
    .login{
        margin:15px 0;
    }
    .login:hover{
        background-color:#02155A;
    }
    .signup{
        font-size:14px;
        color:#0d6efd;
        text-align:center;
    }
    .login-form{
        display:${props => props.forgotpsw ? 'none' : 'block'};
        position:absolute;
    }
`