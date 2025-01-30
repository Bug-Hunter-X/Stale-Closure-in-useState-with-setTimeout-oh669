# Stale Closure in React's useState Hook

This example demonstrates a common issue when using asynchronous operations with React's `useState` hook. The problem arises when trying to update state within a callback (like `setTimeout`) that references a closure variable. Because of asynchronous nature, the value of count might not be up to date, leading to unexpected results and incorrect state updates.

## Bug

The `bug.js` file shows the incorrect implementation where `setCount` uses a stale value of `count` from the closure. This means that the component might not increment by the expected amount or it might render unexpected values.

## Solution

The `bugSolution.js` file presents the correct approach using functional updates. By passing a function to `setCount`, we ensure that the latest value of `count` is used for the update.