import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello TypeScript!',
  description: 'This is App component.',
};

export default App;
