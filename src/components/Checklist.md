Basic example:

```js
initialState = { selection: new Set() };

<Checklist
  items={[
    {
      name: "Milk",
      price: "£0.50"
    },
    {
      name: "Eggs",
      price: "£2"
    },
    {
      name: "Bread",
      price: "£1.20"
    }
  ]}
  cols={[
    {
      id: "name",
      name: "Name"
    },
    {
      id: "price",
      name: "Price"
    }
  ]}
  selection={state.selection}
  updateSelection={selection => setState({ selection })}
/>;
```

`Checklist` separates data and presentation.

The same items can be displayed differently by modifying the `cols` prop:

```js
initialState = { selection: new Set() };

<Checklist
  items={[
    {
      name: "Milk",
      price: "£0.50"
    },
    {
      name: "Eggs",
      price: "£2"
    },
    {
      name: "Bread",
      price: "£1.20"
    }
  ]}
  cols={[
    {
      id: "price",
      name: "Cost",
      width: 0.25
    },
    {
      id: "name"
    }
  ]}
  selection={state.selection}
  updateSelection={selection => setState({ selection })}
/>;
```

A default selection can be made by passing in a non-empty `selection`:

```js
initialState = { selection: new Set([0, 1]) };

<Checklist
  items={[
    {
      name: "Milk",
      price: "£0.50"
    },
    {
      name: "Eggs",
      price: "£2"
    },
    {
      name: "Bread",
      price: "£1.20"
    }
  ]}
  cols={[
    {
      id: "name",
      name: "Name"
    },
    {
      id: "price",
      name: "Price"
    }
  ]}
  selection={state.selection}
  updateSelection={selection => setState({ selection })}
/>;
```

Items can be made unselectable by setting a `disabled` boolean in `items`:

```js
initialState = { selection: new Set() };

<Checklist
  items={[
    {
      name: "Milk",
      price: "£0.50",
      disabled: true
    },
    {
      name: "Eggs",
      price: "£2"
    },
    {
      name: "Bread",
      price: "£1.20"
    }
  ]}
  cols={[
    {
      id: "name",
      name: "Name"
    },
    {
      id: "price",
      name: "Price"
    }
  ]}
  selection={state.selection}
  updateSelection={selection => setState({ selection })}
/>;
```
