import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/authContext'
import './Home.css'

const Home = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch(err) {
      console.log(err.message)
    }
  };

  return (
    <>

      <div className="h-screen gradient-custom flex justify-center w-screen">
        {/* <div ><h5>Hello</h5></div> */}
          <div className="flex justify-center items-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm h-3/4">
              <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 mb-2 font-Montserrat font-bold text-3xl text-center">Hello! 👋🏼</h5>
                <p className='text-lg text-center text-blue-700'>{user&&user.email}</p>
                <p className="text-gray-700 mb-4 font-Montserrat font-medium text-xl text-center">
                  This is my first <span className='font-bold text-blue-600'>React + Firebase</span> project. Hope You liked it! 😁
                </p>
                <div className=' flex justify-center items-center'>
                  <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out font-Montserrat text-base font-medium" onClick={handleLogOut}>Log Out</button>
                </div>
                
              </div>
            </div>
          </div>
        
      </div>
    </>
    

    
  )
}

export default Home
