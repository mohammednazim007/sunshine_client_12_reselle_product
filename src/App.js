
import { RouterProvider } from 'react-router-dom';
import router from './Component/Router/Router';
import Context_provider from './Component/context/Context_provider';
import { Toaster } from 'react-hot-toast';
import axios from "axios"


import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useEffect, useState } from 'react';
import Screen_loader from './Component/Pages/ScreenLoader/ScreenLoader';

//axios call will done by .env file
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers = { token: localStorage.getItem("jwt-token") }

// Create a client
const queryClient = new QueryClient()



function App() {
  const [window_loading, setWindow_loading] = useState(true)

  useEffect(() => {
    window.addEventListener("load", () => {
      setWindow_loading(false)
    })
  }, [])

  return (
    <>
      {window_loading ? (<Screen_loader />) : (<QueryClientProvider client={queryClient}>

        <Context_provider>
          <RouterProvider router={router} />
          <Toaster />
        </Context_provider>

      </QueryClientProvider>)}





    </>
  );
}

export default App;
