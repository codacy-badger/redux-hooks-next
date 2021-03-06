# Redux Hooks Next

[![npm version](https://badge.fury.io/js/redux-hooks-next.svg)](https://badge.fury.io/js/redux-hooks-next) [![CodeFactor](https://www.codefactor.io/repository/github/vstatsura/redux-hooks-next/badge/master)](https://www.codefactor.io/repository/github/vstatsura/redux-hooks-next/overview/master)

## Usage

`yarn add redux react-redux`

`yarn add redux-hooks-next`

`import { useState, useActions, ... } from 'redux-hooks-next'`

### react-redux

Re-exported `useSelector, useDispatch, useStore` from `react-redux`

### useActions(...args)

```js

const mapDispatch = {
    action,
    ...
}

// or

const mapDispatch = [
    action,
    ...
]

function MyScreen() {
  const { action } = useActions(mapDispatch);
  // or
  const [action] = useActions(mapDispatch);
  return <button onClick={action}>click</button>;
}
```

### useState(...args)

```js

const mapState = (state) => ({
    loading: state.loading,
    ...
});

function MyScreen() {
  const { loading } = useState(mapState);
  if (loading) {
    return <p>MyScreen is loading</p>;    
  }
  return <p>MyScreen render</p>;
}
```
