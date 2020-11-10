import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello TypeScript!',
  description: 'This is App component.'
}

export default App;
