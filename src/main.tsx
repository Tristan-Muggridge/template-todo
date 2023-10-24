import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import Root from './routes/root';

import Tasks from './routes/tasks';
import Templates from './routes/templates';
import Configuration from './routes/configuration';
import { StorageProvider } from './context/storageContext';
import { LanguageProvider } from './context/LanguageContext';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: "/tasks",
                element: <Tasks />
            },
            {
                path: "/templates",
                element: <Templates />
            },
            {
                path: "/configuration",
                element: <Configuration />
            },
            {
                path: "/タスク",
                element: <Tasks />
            },
            {
                path: "/テンプレート",
                element: <Templates />
            },
            {
                path: "/設定",
                element: <Configuration />
            },
        ]
    },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <LanguageProvider>
            <StorageProvider>
                <React.StrictMode>
                    <RouterProvider {...{router}} />
                </React.StrictMode>
            </StorageProvider>
        </LanguageProvider>
    );
}
