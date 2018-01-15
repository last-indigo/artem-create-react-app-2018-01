
`const myStore = createStore from 'redux' ( reducer, initialState )`

> The `reducer` function is used to create the store.
Store needs the reducer to process the STATE inside the STORE.
Initial state - e.g load the state saved during the previous usage.

```store.dispatch( action )```
> It is the only way to trigger a state change.

> The `reducer` function, used to create the store, will be called with the
current state tree and the given `action`. Its return value will be
considered the **next** state of the tree, and the change listeners will
be notified.

> Each action should have `type` property, otherwise throws error.

> Each action - is: (from react docs)
 A plain object representing “what changed”. It is a good
  idea to keep actions serializable so you can record and replay user
  sessions, or use the time travelling `redux-devtools`. An action must
  have a `type` property which may not be `undefined`. It is a good idea
  to use string constants for action types.

> The base implementation only supports plain object actions. If you want
to dispatch a Promise, an Observable, a thunk, or something else, you
need to wrap your store creating function into the corresponding
middleware. For example, see the documentation for the `redux-thunk`
package. Even the middleware will eventually dispatch plain object
actions using this method.

Actions are ALWAYS processed into the reducers.
Don't be fooled by the:
    ```const unsubFn = myStore.subscribe```
unsubFn will NOT prevent actions to be processed.

### TODO: when and why would we want to use unsubFn?

### TODO: should we reuse action instances, or always create a new one with action creators/manually?



