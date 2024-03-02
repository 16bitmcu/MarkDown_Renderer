import React from 'react';
import Home from './Pages/Home/Home';

const App = () => {
  const username = 'azhilus';
  const repository = 'TheFrontendDictionary';

  return (
    <div>
      <Home username={username} repository={repository} />
    </div>
  );
};

export default App;