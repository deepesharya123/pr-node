const sgMail = require('@sendgrid/mail');


// sgMail.setApiKey('HEre some dummy data')
sgMail.setApiKey(process.env.sendgridAPIKey)
// sendgridAPIKey=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

// console.log(process.env)
// sgMail.send({
//     to : 'deepesharya82246@gmail.com',
//     from : 'vidkart4u@gmail.com',
//     subject : 'Checking the first email from the sendgrid',
//     text : 'Hello hopew you are doing well and you recieve thr very first mail sent by me'
// })

const sendWelcomeEmail  = (email,name)=>{
    sgMail.send({
        to : email,
        from : 'vidkart4u@gmail.com',
        subject :  `Welcome to the platform.`,
        text:`Dear ${name} , <br> we welcome you on thius very amazing platform.`,
        html : 'here we can use the html code'  
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to : email,
        from : 'vidkart4u@gmail.com',
        subject : 'GoodBYE EMAIL',
        text :  `Dear ${name} , it is very hard to see you goodbye` 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}