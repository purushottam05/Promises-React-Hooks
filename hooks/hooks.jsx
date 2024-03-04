//useState

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

//useState

function Example() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = `You clicked ${count} times`
	})

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

export default Example;

//O/p based

import React, { useState } from 'react';

function Examp() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}




import React from 'react';

function Greeting(props) {
  props.name = "Alice"; // Attempting to modify props
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Bob" />;
}




