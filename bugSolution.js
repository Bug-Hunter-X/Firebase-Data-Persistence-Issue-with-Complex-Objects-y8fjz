The solution involved refactoring the complex object into a simpler structure that would serialize and deserialize better.  Instead of storing a deeply nested object, I changed to a simpler object with flat properties and using simpler data types.  Here's an example:

**Original Complex Object:**

```javascript
const complexObject = {
  name: "My Object",
  data: [
    { id: 1, details: { key1: 'value1', key2: ['a', 'b'] } },
    { id: 2, details: { key1: 'value2', key2: ['c', 'd'] } }
  ]
};
```

**Refactored Simpler Object:**

```javascript
const simplerObject = {
  name: "My Object",
  data: [
    { id: 1, key1: 'value1', key2_0: 'a', key2_1: 'b' },
    { id: 2, key1: 'value2', key2_0: 'c', key2_1: 'd' }
  ]
};
```

By flattening the structure and using simple string or number types, persistence worked reliably.  This demonstrates a limitation of Firebase's local persistence with deeply nested structures and highlights the need for careful data structuring when relying on local persistence for complex data.