import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <Header />
        <Main />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
