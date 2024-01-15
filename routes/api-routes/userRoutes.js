const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/users', getAllUsers);
router.get('users/:userId', getUserId);
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.delete('/users/userId'. deleteUser);

module.exports = router;