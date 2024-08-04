import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === '') {
      setEmailError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsAuthenticated(true);
      navigate("/Dashboard");
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  return (
    <React.Fragment>
      <h2>Login Form</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField 
            label="Email"
            onChange={e => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            fullWidth
            value={email}
            error={emailError}
          />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField 
            label="Password"
            onChange={e => setPassword(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="password"
            fullWidth
            value={password}
            error={passwordError}
          />
        </Stack>
        <Button variant="outlined" color="secondary" type="submit">Login</Button>
      </form>
      <small>Need an account? <Link to="/Signup">Register here</Link></small>
    </React.Fragment>
  );
}

export default Login;
