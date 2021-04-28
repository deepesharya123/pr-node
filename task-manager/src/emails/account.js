const sgMail = require('@sendgrid/mail')
const sendgridAPIKey ='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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to : 'deepesharya82246@gmail.com',
    from : 'vidkart4u@gmail.com',
    subject : 'Checking the first email from the sendgrid',
    text : 'Hello hopew you are doing well and you recieve thr very first mail sent by me'
})