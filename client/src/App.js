import './App.css'
// Importing the components
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/getuser/User'
import Add from './components/adduser/Add'
import Edit from './components/updateuser/Edit'

function App() {
  // Create route for different-different components
  const route = createBrowserRouter([
    {
      // For component-1
      path: '/',
      element: <User />,
    },
    {
      // For component-2
      path: '/add',
      element: <Add />,
    },
    {
      // For component-3
      // Updation with a particular user by its given id
      path: '/edit/:id',
      element: <Edit />,
    },
  ])

  return (
    <div className="App">
      {/* To provide the above routers */}
      {/* {route} is a function from above */}
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
