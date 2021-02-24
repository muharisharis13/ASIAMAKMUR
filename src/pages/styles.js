import styled from 'styled-components';
import Background from '../img/bg-login.svg'

const color = '#11698e';
const color2 = '#6AB8EE';

export const BackgroundImage = styled.div`
  background-image: url(${Background});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: 200px;
  background-position-y: 70px;
  padding-top: 20vh;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  
`
export const LayerImage = styled.table`
background-color:white;
width:500px;
height:250px;
margin-left:30%;
margin-top:-15%;
border-radius:10px;
box-shadow:0px 0px 20px 5px #cdd0cb;

@media (max-width : 1280px) {
margin-left:13%;
}
`

export const Inputan = styled.input`
background-color:none;
width:50%;
margin:auto;
`

export const Icon = styled.span`
font-size:30px;
position:relative;
left:100px;
`
export const TextWelcome = styled.span`
font-weight:700;

`

export const BtnMasuk = styled.span`
color:white;
background:${color}!important;
padding:5px 150px;
font-weight:700;
border-radius:10px;
`

export const BtnProses = styled.button`
background:${color}!important;
padding:5px 10px;
font-weight:700;
color:white;
`
export const BtnPag = styled.span`
background-color: #1687a7 !important;
font-weight:700;
color:white;

`

export const BtnSearch = styled.span`
background:#1687a7 !important;
padding:7px 8px;
border-radius:0px 10px 10px 0px;
float:left;
`
export const InputSearch = styled.input`
border-radius:10px 0px 0px 10px !important;
:focus{
  box-shadow:none;
}
`

export const InputQTY = styled.input`
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
} `

export const RowTable = styled.div`

`
