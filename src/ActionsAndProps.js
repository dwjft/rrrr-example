import React from 'react';
import { compose } from 'rrrr';

const ActionsAndProps = ({
  renderProps: {
    renderValue = '',
  },
  storeActions: {
    asyncChangeValue,
    asyncChangeValueWithError,
    syncChangeValue,
  },
  storeProps: {
    asyncValue = '',
    asyncErrorValue = '',
    inputValue = '',
  },
}) => (
  <div className="actions_and_props">
    <h1>Actions and Props</h1>
    <h2>Props</h2>
    <p>Read readValue from parent: {renderValue}</p>
    <p>Reading inputValue from props: {inputValue}</p>
    <p>Reading asyncValue from props: {asyncValue}</p>
    <h2>Synchronous Actions</h2>
    <p>Changing a text field input:</p>
    <input type="text" onChange={e => syncChangeValue(e.target.value, e)} value={inputValue} />
    <h2>Asynchronous Actions</h2>
    <button onClick={asyncChangeValue}>Click to change a value after 2 seconds...</button>
    <p>{asyncValue}</p>
    <button onClick={asyncChangeValueWithError}>Click to change to an error value after 2 seconds...</button>
    <p>{asyncErrorValue}</p>
  </div>
);

const asyncChangeValue = {
  action: () => new Promise((resolve) => {
    setTimeout(() => resolve('finished async!'), 2000);
  }),
  start: () => ({ asyncValue: 'changing this value in 2 seconds!' }),
  end: ({ result }) => ({ asyncValue: result }),
};

const asyncChangeValueWithError = {
  action: () => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('oh no, an error :(')), 2000);
  }),
  error: ({ result }) => ({ asyncErrorValue: result.toString() }),
  start: () => ({ asyncErrorValue: 'hopefully no error in 2 seconds! :)' }),
};

const syncChangeValue = (inputValue, event) => {
  // event = react synthetic event
  return { inputValue };
};

const actions = {
  asyncChangeValue,
  asyncChangeValueWithError,
  syncChangeValue,
};
const props = state => state;

export default compose(ActionsAndProps, { actions, props });
