
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// const uri="mongodb://127.0.0.1:27017/exams"; 
const uri="mongodb+srv://kaayvee:Canada@1029@cluster0.nidcwj5.mongodb.net/exam?retryWrites=true&w=majority";
// const uri = "mongodb+srv://testuser:testpw1@nodeexpress-jwt-test.p1g9w.mongodb.net/bookList?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.get('/',(req,res)=>{
      res.send();
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    const userSchema = new mongoose.Schema({
        name: String,
        sid: String
      });
      
      const User = mongoose.model('Quizes', userSchema);
  
      // Create new book document objects
      const user1 = new User({ name:'Karanveer Singh',sid:'300356108'});
      user1.insertOne((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('user added');
          mongoose.connection.close();
        }
      });
});
