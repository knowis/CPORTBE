import { services } from 'solution-framework';
import { mess_Message } from 'solution-framework/dist/sdk/v1/solution/repository/entityHierarchy';

export default class extends services.mess_GetUserMessagesService {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('mess_GetUserMessagesService.execute()');

    const getUserMessagesResponse = await this.apis.userMessageService.getUserMessages({ user: this.input.user });
    const status = getUserMessagesResponse.status;
    const messagesFromAPI = getUserMessagesResponse.body;

    const messages: mess_Message[] = [];

    if (status === 200) {
      messagesFromAPI.forEach(mes => {
        const message = this.factory.entity.mess.Message();
        message.messageId = mes.id;
        message.text = mes.text;
        message.read = mes.read;
        message.sender = mes.sender;
        message.user = mes.user;
        message.createdBy = mes.createdBy;
        if (mes.createdOn) {
          message.createdOn = new Date(mes.createdOn);
        }
        messages.push(message);
      });
    }
    this.output = messages;

  }

}
