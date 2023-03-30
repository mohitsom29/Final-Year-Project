import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import { AuthContextProvider } from "./Context/AuthContext";
import Protected from "./Context/Protected";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";

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
            <Route path="/SignUp" element={<SignUp />}></Route>
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
