
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Products/Product';
import Main from './Layout/Main';
import Friend from './components/Friend/Friend';
import FriendDetails from './components/Friend/SFriend/FriendDetails/FriendDetails';
import Post from './components/Post/Post';
import PD from './components/Post/PD';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/product', element: <Product></Product> },
        {
          path: '/post',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          }
          , element: <Post></Post>
        },
        {
          path: '/post/:postID',
          loader: ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
          },
          element: <PD></PD>
        }
        ,
        {
          path: 'friend',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friend></Friend>
        },
        {
          path: '/friend/:friendID',
          loader: ({ params }) => {
            // console.log(params.friendID)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
          },
          element: <FriendDetails></FriendDetails>
        }
      ]
    },
    { path: '/about', element: <About></About> },
    { path: '*', element: <div>This route is not found 404</div> }//if the route name doesnot exist

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
