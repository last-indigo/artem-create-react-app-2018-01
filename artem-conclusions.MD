
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

DO NOT dispatch in subscribe listeners (this way - you could cause recursion).
See `myActionDispatchListener` for example

# Remember to ALWAYS return STATE for unknown action types!

reducer composition (https://egghead.io/lessons/react-redux-reducer-composition-with-objects)

The onMyStoreChanged (`store.subscribe( onMyStoreChanged )`) function WILL NOT be called,
if someone calls UNSUBSCRIBE returned function!

### TODO: in time travel, how do we move to PREV state AND persist it to various APIs on server?

### TODO: how to correctly re-render app on changes in store?
Use react-redux? (https://github.com/reactjs/react-redux)
Use root render method?

It's better to keep state serializable - i.e. a VALID JSON OBJECT!
(To be able to store in LocalStorage)

We can pass all of the props in the state by writing `<MyComp {...store.getState()} />`
Which will also automatically pick the proper name for the prop.

Passing a lot of prop-callbacks from smart -> to dumb (leaf) components is a real problem,
but it can be easily solved with intermediate container components. 
(08:15, https://egghead.io/lessons/react-redux-extracting-presentational-components-addtodo-footer-filterlink)
Will see in the next lessons.


*NOTE on REACT:* 
not very clear from component API definition, which PROPS are available.
-> though, you can mimic the API by using destructuring of `this.props`
e.g.: `let { prop1, prop2 } = this.props` (see 07:10 in https://egghead.io/lessons/react-redux-react-todo-list-example-filtering-todos)

NOTE ON VSCODE:
- cannot move file
- cannot copy relative path with line number
- different key bindings (it's possible to change them, though)
- no git tree
- no 'reveal in source panel' target icon
- poor 'Git: resolve conflicts' editor (cannot apply diffs line by line)