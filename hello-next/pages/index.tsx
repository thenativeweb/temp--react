import { App } from '../components/App';
import { FunctionComponent } from 'react';
import Head from 'next/head'
import { v4 as uuid } from 'uuid';

const Home: FunctionComponent = function () {
  const todos = [
    { id: uuid(), description: 'Have lunch', isDone: false },
    { id: uuid(), description: 'Allow todos to be edited', isDone: false },
    { id: uuid(), description: 'Allow todos to be ticked off', isDone: false },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App initialTodos={todos} />

      <style jsx>{`
        /* Some CSS */
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: sans-serif;
        }

        :root {
          --primary-color: #007700;
        }
      `}</style>
    </div>
  )
}

export default Home;
