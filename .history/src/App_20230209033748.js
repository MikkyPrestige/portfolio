import { ErrorBoundary } from "react-error-boundary";
import { Layout } from "./components/layout";
import Fallback from "./components/fallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
