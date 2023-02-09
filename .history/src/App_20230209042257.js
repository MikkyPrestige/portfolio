import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./components/home";
import Fallback from "./components/fallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
