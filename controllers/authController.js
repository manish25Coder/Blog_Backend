const authService = require('../Services/authService.js');

exports.register = async (req, res) => {
  try {
    // console.log(authService);
    const user = await authService.registerUser(req.body);
    console.log(user);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    // Destructure email and password from req.body
    const { email, password } = req.body;
    const { user, token } = await authService.loginUser(email,password);
    console.log(user,token);
    
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
