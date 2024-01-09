import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ErrorPage from "./ui/ErrorPage";
import Home from "./views/home";
import PublishArticle from "./views/PublishArticle";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'publish',
                element: <PublishArticle />
            }
        ]
    }
]);

export default router