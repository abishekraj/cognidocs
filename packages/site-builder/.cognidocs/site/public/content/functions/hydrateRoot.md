# hydrateRoot

Same as `createRoot()`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. React will attempt to attach event listeners to the existing markup. **Example Usage** `jsx hydrateRoot(document.querySelector('#root'), <App />) `

**Return Type:** `Root`

## Parameters

| Name              | Type                  | Optional | Description |
| :---------------- | :-------------------- | :------- | :---------- |
| `container`       | `Element \| Document` | No       | -           |
| `initialChildren` | `React.ReactNode`     | No       | -           |
| `options`         | `HydrationOptions`    | Yes      | -           |
