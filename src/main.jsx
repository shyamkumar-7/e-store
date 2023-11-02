import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';

export const totalContext = createContext();

function RootComponent() {
  const [total, setTotal] = useState(0);

  return (
    <React.StrictMode>
      <totalContext.Provider value={{ total, setTotal }}>
        <Provider store={store}>
          <App />
        </Provider>
      </totalContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);
