import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EditorPage from "./Pages/EditorPage";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./Context/AuthContext";
import Protected from "./Context/Protected";
import Login from "./Pages/Authentication/Login";
// import Auth from "./Pages/Authentication/Auth";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div>
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                theme: {
                  primary: "#4aed88",
                },
              },
              error: {
                theme: {
                  primary: "#FFCCCB",
                },
              },
            }}
          ></Toaster>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route
              path="/Home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            ></Route>
            <Route path="/editor/:roomId" element={<EditorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
