import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layouts";
import Category from "./pages/category";
import Dashboard from "./pages/dashboard";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Dashboard progress={progress} setProgress={setProgress} />
            }
          />
          <Route
            path="/categories"
            index
            element={<Category progress={progress} setProgress={setProgress} />}
          />
        </Routes>
        <LoadingBar
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
