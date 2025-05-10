import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { BrowserRouter } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Register from "./pages/Register";

function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            errorElement:<Error/>,
            children: [
                {
                    element: <Home />,
                    // path:'/',
                    children:[
                        {
                            path:'/login',
                            element:<Login/>
                        },
                        {
                            path:'/register',
                            element:<Register/>
                        }
                    ]
                },
                {
                    path: "/posts",
                    element: <Posts />,
                },
                {
                    path: "/posts/:postId",
                    element: <Post />,
                }
            ],
        },
    ]);
    /*
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <BrowserRouter>
                <Header />
                <div style={{ flexGrow: 1, padding: "1rem" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                     <Route path="/posts" element={<Posts />} />
                     <Route path="/posts/:postId" element={<Post/>}/>
                </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
    */
    return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
