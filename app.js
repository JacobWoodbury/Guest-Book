//express
import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//declarations
const friends = [];
const PORT = 3000;

//page paths
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});
app.get('/newFriend', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/newFriend.html`)
});

//posting to my array and redirecting to friend page
 app.post('/newFriend', (req, res) =>{
    const friend = {
        fname: req.body.fname,
        lname: req.body.lname,
        job: req.body.job,
        company: req.body.company,
        linkedin: req.body.linkedin,
        email: req.body.email,
        meet: req.body.meet,
        meetOther: req.body.meetOther,
        message: req.body.message,
        addMail: req.body.addMail,
        format: req.body.format
    };
    friends.push(friend);
    console.log(friends)
    res.sendFile(`${import.meta.dirname}/views/newFriend.html`);
    
 });

 

//Tell the server to listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});