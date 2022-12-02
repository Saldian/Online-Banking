const Student = require('../models/user');
const User = require('../models/user');


const createStudent = async (req, res) => {
const content = req.body;
const user = await User.findById(content.userId);

console.log('the user', user);

//console.log(content);
try {
const student = await Student.create({ user: content.userId, ...content
})

console.log('checking what is here', student)

user.student = user.student.concat(student._id)
await user.save();

return res.status(201).json({ data: student });
} catch (error) {
console.log(error);
return res.status(500).end();
}
};

const getAllStudent = async (req, res) => {
  const userId = req.body.userId;

try {
const student = await Student.find({});

 return res.status(201).json({ data: student });
}catch (error) {
 console.log(error);
 return res.status(500).end();
 }
 };

const getOneStudent = async (req, res) => {
const id = req.params.id
const userId = req.body.userId;


 try {
 const student = await Student.findOne({ _id: id, user: userId });

 if (!student) {
 return res.status(400).json({ message: 'student not found' });
  }

 return res.status(201).json({ data: student });
 } catch (error) {
 console.log(error);
 return res.status(500).end();
}
 };

 const updateOneStudent = async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId;
  const content = req.body

try {
const student = await Student.findOneAndUpdate(
{ _id: id, user: userId },
 content,
  { new: true }
  );


if (!student) {
return res.status(400).json({ message: 'student not found' });
}
return res.status(201).json({ data: student });
} catch (error) {
console.log(error);
return res.status(500).end();
}
};

            //const deleteOne = async (req, res) => {
//const id = req.params.id
 //try {
  //                 const student = await Student.findOneAndRemove({ _id: id });

  //               if (!user) {
  //                 return res.status(400).json({ message: 'student not found'});
 //            }
 ///          return res.status(201).json({ message: 'deleted successfully',
 //       data: user});
                   
 // }catch (error) {
 //   console.log(error);
 // return res.status(500).end();
 //}
 //}

            
module.exports = {
createStudent,
getAllStudent,
getOneStudent,
updateOneStudent
 //deleteOne
};