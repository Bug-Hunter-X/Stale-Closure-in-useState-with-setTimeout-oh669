```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting state in an asynchronous callback
    setTimeout(() => {
      setCount(count + 1); // Using the stale closure value of 'count'
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```