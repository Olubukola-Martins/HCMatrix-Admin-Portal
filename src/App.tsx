import AppLayout from "components/layouts/AppLayout";
import { AppProviders } from "components/providers";

function App() {
  return (
    <AppProviders>
      <AppLayout>
        <div className="text-red-600">red</div>
      </AppLayout>
    </AppProviders>
  );
}

export default App;
