import { useState } from 'react'
import router from 'react router dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import routes from './routes'
function App() {

  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      {/* <Dashboard /> */}
      <router>
        <routes/>
      </router>
    </>
  )
}

export default App
