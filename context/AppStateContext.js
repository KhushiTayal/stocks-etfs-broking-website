// context/AppStateContext.js
import { createContext, useContext, useReducer } from 'react';

// Define your initial state and actions here
const initialState = {
  topGainers: [],
  topLosers: [],
  // Add other global state variables here
};

// Define your actions (functions that modify state)
const AppActions = {
  setTopGainers: 'SET_TOP_GAINERS',
  setTopLosers: 'SET_TOP_LOSERS',
  // Add other action types here
};

// Create the context
const AppStateContext = createContext();

// Define a reducer function to handle state changes
function appReducer(state, action) {
  switch (action.type) {
    case AppActions.setTopGainers:
      return { ...state, topGainers: action.payload };
    case AppActions.setTopLosers:
      return { ...state, topLosers: action.payload };
    // Implement other cases for different actions
    default:
      return state;
  }
}

// Create a provider component to wrap your app with
function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

// Create a custom hook to access the state and dispatch
function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}

export { AppStateProvider, useAppState, AppActions };
