const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
{
email: {
type: String,
required: true,
unique: true,
trim: true
},

password: {
type: String,
required: true
},

firstname: {
type: String,
trim: true,
maxlength: 25
},

minit: {
type: String,
trim: true,
maxlength: 25
},

lastname: {
type: String,
trim: true,
maxlength: 25
},

role: {
type: String,
enum: ['Admin', 'User'],
default: 'User'
}
},

{ timestamps: true }
)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the password should not be revealed
    delete returnedObject.password
    }
    })

    const User = mongoose.model('user', userSchema)
    module.exports = User
    
    
    const User = require('../models/user');
    const createUser = async (req, res) => {
    const content = req.body;
    console.log(content);
    try {
    const user = await User.create({ ...content });

    return res.status(201).json({ data: user });
    } catch (error) {
    console.log(error);
    return res.status(500).end();
    }
    };
    module.exports = {
    createUser
    };
    
    
    
    
    
    
    
