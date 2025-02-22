//express
import express from 'express';
const app = express();

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

//declarations
const friends = [];


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
        format: req.body.format,
        timestamp: new Date()
    };
    if (friend.fname.trim() === "" || friend.lname.trim() === "" || friend.email.trim() === "") {
        res.send("Invalid name/email");
        return;
    }
    friends.push(friend);
    console.log(friends)
    res.render('newFriend', {friend});
    
 });

 app.get('/admin/friends', (req, res) =>{
    res.send(friends);
 });
 

//Tell the server to listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});