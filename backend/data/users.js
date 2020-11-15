import bcyrpt from 'bcryptjs';

const users = [
  {
    name : "Akash Saxena",
    email : "Lordmartin2308@gmail.com",
    password : bcyrpt.hashSync('123456',10),
    isAdmin : true
  },
  {
    name : "A1",
    email : "A1@gmail.com",
    password : bcyrpt.hashSync('123456',10),
  },
  {
    name : "A2",
    email : "A2@gmail.com",
    password : bcyrpt.hashSync('123456',10),
  },
]

export default users;