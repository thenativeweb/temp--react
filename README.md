# React

- React is a JavaScript library for creating web UIs
  - It is *not* a framework, it focuses on just rendering

- React follows a functional approach
  - You will use things such as `map` and `reduce`
  - You will use immutability and immutable data types
  - You will use a uni-directional data flow

- React …
  - … has been created by Facebook
  - … was originally created in 2013
  - … was published as open-source (using the MIT license today)

## Challenges

- Number of files
  - You want to have a large number of small files while developing to be able to structure your code
  - You want to have a small number of large files while running in production
- Modern JavaScript / TypeScript
  - You want to use modern JavaScript and / or TypeScript while developing
  - You want to have old JavaScript code for compatibility with legacy browsers

- Solutions for both problems
  - Bundlers: They combine your code into a single file (or at least into a low number of files), such as `Webpack`, `Rollup`, `Parcel`, `Browserify`, …
  - Transpiler: They convert your modern code into old code, so that it becomes compatible with legacy browsers, such as `Babel`, `TypeScript`, …

- Bootstrapping a project
  - Typical examples are `create-react-app`, `Next.js`, …

## Requirements

- Node.js (see https://nodejs.org/)
  - 16.14.2 LTS
  - 18.0.0 Current

## Setting up a project

### Create React App

```shell
# As vanilla JavaScript project
$ npx create-react-app <application-name>

# As TypeScript project
$ npx create-react-app <application-name> --template typescript
```

### Next.js

```shell
# As vanilla JavaScript project
$ npx create-next-app <application-name> --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

## Next steps

- Build components
  - Use props
  - Use state
  - Handle events
  - Raise events
  - Use conditional rendering
  - Use lists and keys
  - Use forms
- Identify and locate state **THIS IS THE MOST IMPORTANT THING**
  - Separate presentation components from smart components
- Advanced things
  - Contexts (for things such as authentication, i18n, logging, theming, …)
  - Refs (integrating with non-React components, e.g. jQuery)
  - Performance optimization and profiling, and debugging
  - Hooks (`useEffect`, `useCallback`, `useMemo`, `useReducer`, …)
  - Testing (e.g. for component testing, see `React Testing Library`)
