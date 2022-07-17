class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage(`Hello 🌵 Please Choose From The Following: Contact Us, Sppurt Files, Exit`);
    this.addMessageToState(message);
  };

  contact = () => {
    const message = this.createChatBotMessage(`Call us on 055-555-5555`);
    this.addMessageToState(message);
  };

  support = () => {
    const message = this.createChatBotMessage(<a href="https://files.alriyadh.gov.sa/parkingAndTrees.pdf">Chack This Out 🌵</a>);
    this.addMessageToState(message);
  };

  bey = () => {
    const message = this.createChatBotMessage('Bye 🌵');
    this.addMessageToState(message);
  };

  again = () => {
    const message = this.createChatBotMessage(`Please Choose From The Following: Contact Us, Sppurt Files, Exit`);
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;