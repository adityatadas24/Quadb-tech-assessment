import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch,} from "react-redux";
import { fetchWeather } from "../../Redux/Actions/WeatherApi";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginData, setLoginData] = useState([]);
const [error , setError] = useState('')
  function handleSubmitInput(e) {
    e.preventDefault();
    if(password.length === confirmPassword.length){
      setLoginData([...loginData, { name, email, password, confirmPassword,city }]);
      console.log(name, email, password, confirmPassword,);
      dispatch(fetchWeather(city))
      navigate('./task')
    }else{
setError('password and confirm passord does not match')
    }
   
  }

  return (
    <div className="login">
      <Form onSubmit={handleSubmitInput}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="taxt"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
        
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Form.Text className="text-danger">{error && <>{error}</>}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      

    </div>


  );
};

export default LoginSignup;
