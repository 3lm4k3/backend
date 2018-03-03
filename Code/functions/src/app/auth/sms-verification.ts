
export class SMSAuthenticator{
   
    constructor() {
        
    }
    public sendMessage():any{
        let accountSid="AC2e0a3be59f1a02b7d88a16793ad8560c";
        let authToken="13211aadf3351b692c5549603d0e557f";
        let message="Ahmed Test";
        let to="+201063317793";
        let sendingNumber="+14129064004";
        let client = require('twilio')(accountSid, authToken);
        // console.log(client.api.messages.create())
        console.log("Message Is Sending --->");
        return client.api.messages
          .create({
            body: message,
            to: to,
            from: sendingNumber,
          }).then(function(data) {
            console.log('Administrator notified');
          }).catch(function(err) {
            console.error('Could not notify administrator');
            console.error(err);
          });
    
    }
} 