const express = require("express")
const router = express.router();
const cors = require("cors");
const nodemailer = require("nodemailer");


// Server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(5000, () => console.log("server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "tyang098@gmail.com",
        pass: "" // go to google and add application password
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send");
    }
})


router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "tyang098gmail.com",
        subject: "Someone is reaching out from the portfolio",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`
               
    };
    
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({code: 200, status: "Message Sent"});
        }
    })
})
