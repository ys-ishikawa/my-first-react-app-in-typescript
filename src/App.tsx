import React from 'react';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message, description }) => {
  return (
    <div>
      <p>{ message }</p>
      <p>{ description }</p>
    </div>
  );
};

App.defaultProps = {
  message: 'Hello TypeScript!',
  description: 'This is App component.'
}

export default App;
