class ActionProvider {
    constuctor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }
}

export default ActionProvider;