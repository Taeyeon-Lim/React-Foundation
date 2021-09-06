import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
  const text = useContext(MyContext);
  return <div>ㅎㅇ, {text}</div>;
}

function Parent({ text }) {
  return <Child />;
}

function GrandParent({ text }) {
  return <Parent />;
}

function ConTextSample({ text }) {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? 'Good' : 'bad'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK</button>
    </MyContext.Provider>
  );
}

export default ConTextSample;
