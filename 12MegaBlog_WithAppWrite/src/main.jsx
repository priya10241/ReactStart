import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import AuthLayout from "./components/AuthLayout.jsx"
import AllPosts from './pages/AllPosts.jsx'
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Post.jsx"
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children: [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/login",
        element : < AuthLayout authorisation = {false}>
          <Login/>
        </AuthLayout>
      },
      {
        path : "/signup",
        element : < AuthLayout authorisation = {false}>
          <Signup/>
        </AuthLayout>
      },
      {
        path : "/all-posts",
        element : < AuthLayout authorisation>
          <AllPosts/>
        </AuthLayout>
      },
      {
        path : "/add-post",
        element : < AuthLayout authorisation>
          <AddPost/>
        </AuthLayout>
      },
      {
        path : "/edit-post/:slug",
        element : < AuthLayout authorisation >
          <EditPost/>
        </AuthLayout>
      },
      {
        path : "/post/:slug",
        element : <Post/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}> 
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
