const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getOneUser, updateOneUser, deleteOneUser,} = require('../controllers/user');
require('../controllers/user');
const { createStudent, getAllStudent, getOneStudent, updateOneStudent, deleteOneStudent  }  = require('../controllers/student');

//user route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOneUser);
router.delete('/user/:id', deleteOneUser);

// Student route
router.post('/student', createStudent);
router.get('/student', getAllStudent);
router.get('/student/:id', getOneStudent);
router.put('/student/:id', updateOneStudent);
router.delete('/student/:id', deleteOneStudent);

module.exports = router;