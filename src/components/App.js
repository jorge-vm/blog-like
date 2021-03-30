import React, { useState, useEffect } from 'react';

function App() {
  const [foo, setFoo] = useState({ test: 42 });

  const af = () => Promise.resolve(37);

  useEffect(async () => {
    const res = await af();
    setFoo({ test: res });
  });

  return (
    <h2>
      Hello -
      {' '}
      {foo.test}
    </h2>
  );
}

export default App;
