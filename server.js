const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();

app.use(express.json());
app.use(express.static('public'));

// 1. Connect to MongoDB (This assumes MongoDB is running on your computer locally)
// 💡 Change 27001 to 27017!
mongoose.connect('mongodb+srv://megakandhan0_db_user:dcH6RfffuySyGx1W@cluster0...')
  .then(() => console.log("Connected to MongoDB successfully! 🎉"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// 2. Define what a "Student" looks like (The Schema)
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    registrationDate: { type: Date, default: Date.now }
});

// 3. Create the Student Model
const Student = mongoose.model('Student', studentSchema);

// 4. Update our Route to Save Data into MongoDB
app.post('/api/register', async (req, res) => {
    try {
        const studentData = req.body;

        // Create a new student document using our model
        const newStudent = new Student({
            name: studentData.name,
            email: studentData.email
        });

        // Save it directly into the database
        await newStudent.save();
        
        console.log("Saved to MongoDB:", newStudent);

        res.json({ 
            message: `Success! Welcome to the academy, ${studentData.name}! Your data is secured in MongoDB.` 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Oops! Something went wrong saving your data." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Example: Route to view all registrations
app.get('/view-registrations', async (req, res) => {
    try {
        const data = await Register.find({}); // Replace 'Register' with your Mongoose model name
        console.log(data); // This logs it to your terminal
        res.status(200).json(data); // This sends it to your browser
    } catch (error) {
        res.status(500).send(error);
    }
});
// Add this to your server.js
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find(); // Matches your 'students' collection
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

