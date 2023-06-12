import './App.css';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import HomePage from './pages/HomePage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <HomePage />
      </div>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition = 'bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
