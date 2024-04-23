import {Component} from 'react'

import {
  AppContainer,
  Heading,
  TabsContainer,
  TabItemContainer,
  TabButton,
  ActiveTabButton,
  LanguageItemContainer,
  LanguageItemImage,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = languageGreetingsList.filter(
      eachDetails => eachDetails.id === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state

    const filteredProjects = this.getFilteredProjects()

    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        <TabsContainer>
          {languageGreetingsList.map(tabDetails => {
            const onClickTab = () => {
              this.clickTabItem(tabDetails.id)
            }
            return (
              <TabItemContainer key={tabDetails.id}>
                {activeTabId === tabDetails.id ? (
                  <ActiveTabButton type="button" onClick={onClickTab}>
                    {tabDetails.buttonText}
                  </ActiveTabButton>
                ) : (
                  <TabButton type="button" onClick={onClickTab}>
                    {tabDetails.buttonText}
                  </TabButton>
                )}
              </TabItemContainer>
            )
          })}
        </TabsContainer>
        {filteredProjects.map(eachItem => (
          <LanguageItemContainer key={eachItem.id}>
            <LanguageItemImage
              src={eachItem.imageUrl}
              alt={`${eachItem.imageAltText}`}
            />
          </LanguageItemContainer>
        ))}
      </AppContainer>
    )
  }
}

export default MultilingualGreetings
