import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import MainContext from './utils/context/MainContext'
import AppWrapper from './components/layout/AppWrapper'
import Router from './components/router/Router'

// API Config
axios.defaults.baseURL = import.meta.env.VITE_APP_API + ''
axios.defaults.withCredentials = true

export default function App() {
  return (
    <div className='font-poppins text-[#25262a]'>
      <MainContext>
        <AppWrapper>
          <Router />
        </AppWrapper>
      </MainContext>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={true}
      />
    </div>
  )
}