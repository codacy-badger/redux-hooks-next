# Redux Hooks Next

## Usage

`yarn add redux react-redux`

`yarn add redux-hooks-next`

`import { useState, useActions, ... } from 'redux-hooks-next'`

### react-redux

Reexport `useSelector, useDispatch, useStore` from `react-redux`

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

### useAction(action)

```js

function MyScreen() {
  const onAction = useAction(action);

  return <button onClick={onAction}>click</button>;
}
```

### useState(...args)

```js

const mapState = (state) => ({
    loading: state.loading,
});

function MyScreen() {
  const { loading } = useState(mapState);
  if (loading) {
    return <p>MyScreen is loading</p>;    
  }
  return <p>MyScreen render</p>;
}
```
