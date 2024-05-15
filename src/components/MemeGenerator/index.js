import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  MemeGeneratorForm,
  MemeHeader,
  InputLabel,
  InputField,
  SelectField,
  CustomButton,
  BgImageContainer,
  BgText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    inputImgUrl: '',
    inputTopText: '',
    inputBottomText: '',
    inputFontSize: fontSizesOptionsList[0].optionId,
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImgUrl = event => {
    this.setState({
      inputImgUrl: event.target.value,
    })
  }

  onChangeTopText = event => {
    this.setState({
      inputTopText: event.target.value,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      inputBottomText: event.target.value,
    })
  }

  handleFontSizeChange = event => {
    this.setState({
      inputFontSize: event.target.value,
    })
    console.log(event.target.value)
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {inputImgUrl, inputTopText, inputBottomText, inputFontSize} =
      this.state
    this.setState({
      imgUrl: inputImgUrl,
      topText: inputTopText,
      bottomText: inputBottomText,
      fontSize: inputFontSize,
    })
  }

  renderMemeContainer = () => {
    const {inputImgUrl, inputTopText, inputBottomText, inputFontSize} =
      this.state
    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <MemeHeader>Meme Generator</MemeHeader>
        <InputLabel htmlFor="bgImgUrl">Image URL</InputLabel>
        <InputField
          type="text"
          onChange={this.onChangeImgUrl}
          value={inputImgUrl}
          id="bgImgUrl"
        />
        <InputLabel htmlFor="topText">Top Text</InputLabel>
        <InputField
          type="text"
          onChange={this.onChangeTopText}
          value={inputTopText}
          id="topText"
        />
        <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
        <InputField
          type="text"
          onChange={this.onChangeBottomText}
          value={inputBottomText}
          id="bottomText"
        />
        <InputLabel htmlFor="selectFont">Font Size</InputLabel>
        <SelectField
          onChange={this.handleFontSizeChange}
          value={inputFontSize}
          id="selectFont"
        >
          {fontSizesOptionsList.map(eachOption => (
            <option key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </option>
          ))}
        </SelectField>
        <CustomButton>Generate</CustomButton>
      </MemeGeneratorForm>
    )
  }

  renderBgImageContainer = () => {
    const {imgUrl, topText, bottomText, fontSize} = this.state
    return (
      <BgImageContainer data-testid="meme" bgImgUrl={imgUrl}>
        <BgText textFontSize={fontSize}>{topText}</BgText>
        <BgText textFontSize={fontSize}>{bottomText}</BgText>
      </BgImageContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <ResponsiveContainer>
          {this.renderMemeContainer()}
          {this.renderBgImageContainer()}
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
