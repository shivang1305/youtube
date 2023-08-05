import "./App.css";
import Head from "./Head";
import Body from "./Body";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./utils/store";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
