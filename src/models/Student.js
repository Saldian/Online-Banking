const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
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
},

user: [
    {
        type: mongoose.Schema.type,
        ref: 'user'
        
    }
]
},

{ timestamps: true }
)

studentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the password should not be revealed
    delete returnedObject.password
    }
    })

    const Student = mongoose.model('student', studentSchema)
    module.exports = User
    
    
