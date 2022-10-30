### If something occurs like undefined is not assignable to 'SoType'.

> make the parameter as optional to overcome.

```js
export interface PlaceType {
  name?: string;
  id: string;
  description?: string;
  thumbnail?: string;
  // this will show error if we do not pass the id argument
}
```

### Optional Chaining with objects and function

```js
object_name?.prop1?.prop2?.value;
// if object_name exist then go to prop1 and so on
```

```js
functionDisplay?.();
// if functionDisplay exist then call '()' it
```
