/// <reference types="react" />

// Provide a minimal declaration to satisfy the TypeScript compiler in environments
// where the JSX runtime or intrinsic elements can't be resolved automatically.
// This avoids errors like:
// - "This JSX tag requires the module path 'react/jsx-runtime' to exist"
// - "JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists"

declare module 'react/jsx-runtime' {
  export * from 'react';
  const jsx: any;
  const jsxs: any;
  const jsxDEV: any;
  export { jsx, jsxs, jsxDEV };
  export default jsx;
}

declare namespace JSX {
  // Allow any intrinsic element (canvas, div, etc.) to be used without strict typings.
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
