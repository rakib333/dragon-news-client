import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/category/Categories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'category/:id',
                element: <Categories></Categories>
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>
            }
        ]
    }
])


export default router;