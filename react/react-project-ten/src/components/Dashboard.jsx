import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/');
  }

  return (
    <div>
      Dashboard Page
      <button onClick={handleClick}>
        Move to Home Page
      </button>
      {/* for child/nested routes */}
      <Outlet />
    </div>
  )
}

export default Dashboard
