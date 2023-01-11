import express from 'express';
import getDoctors from '../controllers/doctor.js'
import registerUsers from '../controllers/Users.js';
const router=express.Router();

//all routes for doctors are specified with "/"
router.get('/', getDoctors);
router.post('/register', registerUsers);

export default router;