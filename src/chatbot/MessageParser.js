class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    }
    else if (lowercase.includes("contact")){
      this.actionProvider.contact();
    }
    else if (lowercase.includes("support")){
      this.actionProvider.support();
    }
    else if (lowercase.includes("exit") || lowercase.includes("bey")) {
      this.actionProvider.bey();
    } 
    else {
      this.actionProvider.again();
    }
  }
}

export default MessageParser;