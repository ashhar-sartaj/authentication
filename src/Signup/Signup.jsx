import React, { useState } from 'react'
import './Signup.css'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../Context/authContext'
import {Alert} from 'react-bootstrap'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const {Signup} = UserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await Signup(email, password)
      navigate("/")
    } catch(error) {
      setError(error.message)
    }
  };
  return (
      <>
      <section className="h-screen gradient-custom flex justify-center w-screen">
    <div className="container py-5 h-screen">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
            <div className="card-body p-5 text-center">
  
              <div>
  
                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                {error && <Alert varient="danger">{error}</Alert>}
                <div className="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                  <label className="form-label" for="typeEmailX">Email</label>
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                  <label className="form-label" for="typePasswordX">Password</label>
                </div>
  
                {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}
  
                <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Sign Up</button>
  
                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>
  
              </div>
  
              <div>
                <p className="mb-0">Already have an account? <Link to="/" className="text-white-50 fw-bold">Log In</Link>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Signup
