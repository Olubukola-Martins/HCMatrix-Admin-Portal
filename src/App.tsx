import { AppProviders } from "components/providers";
import AppRoutes from "routes";

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default App;
