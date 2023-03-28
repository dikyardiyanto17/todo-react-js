import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home';
import Layout from '../components/Layout';
import Details from '../views/Details';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: (
                    <Home />
                ),
            },
            {
                path: "details/:id",
                element: (
                    <Details />
                ),
            }
        ]
    }
]);

export default router