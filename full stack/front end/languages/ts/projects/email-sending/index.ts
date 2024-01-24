let nodemailer=require('nodemailer')
let transport=nodemailer.createTransport({
    auth:{
        user:'sudarshanw7353@gmail.com',
        pass:'iolqsqgshcctlowj'
       
    },
    service:'gmail',
    tls:{
        rejectUnauthorized:false
    }
})
let mailoptions={
    from:'sudarshanw7353@gmail.com',
    to:'waseemahmed116@gmail.com',
    
    subject:'practice',
    text:'hellow'
}
transport.sendMail(mailoptions,(err:any,res:any)=>{
if(err)throw err;
console.log('mail sent')
})