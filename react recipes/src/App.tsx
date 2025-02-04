import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserProvider } from './context/UserContext';
import { store } from './store/store';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;