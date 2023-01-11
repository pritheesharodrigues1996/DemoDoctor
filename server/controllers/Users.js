import bcrypt from 'bcrypt';

const registerUsers= (req, res)=>{
    bcrypt.hash(request.body.password, 10)
  .then(
    (hashedPassword) => {
        const user = new User({
          email: request.body.email,
          password: hashedPassword,
        });
        user.save().then((result) => {
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          .catch((error) => {
            response.status(500).send({
              message: "Error while registering user",
              error,
            });
          });
    })
  .catch((e) => {
    response.status(500).send({
      message: "Password was not successfully encrypted",
      e,
    });
    
});

   
}
 export default registerUsers;