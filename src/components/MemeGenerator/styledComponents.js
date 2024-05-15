import styled from 'styled-components'

export const AppContainer = styled.div`
min-height: 100vh;
display: flex;
justify-content: center;
padding-top: 30px;
padding-bottom: 30px;
`

export const ResponsiveContainer = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const MemeGeneratorForm = styled.form`
width: 45%;
display: flex;
flex-direction: column;
`

export const MemeHeader = styled.h1`
color: #35469c;
font-family: Roboto;
font-size: 30px;
font-weight: bold;
margin-bottom: 30px;
`

export const InputLabel = styled.label`
color: #7e858e;
font-family: Roboto;
font-size: 14px;
margin-bottom: 12px;
`

export const InputField = styled.input`
width: 90%;
border: 1px solid #d7dfe9;
border-radius: 4px;
height: 36px;
margin-bottom: 20px;
padding-left: 12px;
`

export const SelectField = styled.select`
width: 90%;
border: 1px solid #d7dfe9;
border-radius: 4px;
height: 36px;
margin-bottom: 20px;
padding-left: 12px;
`

export const CustomButton = styled.button`
background-color: #0b69ff;
border: none;
border-radius: 4px;
font-family: Roboto;
font-size: 14px;
height: 36px;
width: 120px;
color: #ffffff;
cursor: pointer;
`

export const BgImageContainer = styled.div`
height: 320px;
width: 48%;
background-image: url(${props => props.bgImgUrl});
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;
`

export const BgText = styled.p`
color: #ffffff;
font-family: Roboto;
font-size: ${props => props.textFontSize}px;
text-align: center;
`
