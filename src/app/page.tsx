import Link from "next/link";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, Suspense } from "react";

async function getTodos() {
  await wait(2000);
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}

export default function Home() {
  return (
    <>
      <h1>Todos</h1>
      <Suspense fallback="Load...">
        <TodoList />
      </Suspense>
    </>
  );
}

async function TodoList() {
  const todos = await getTodos();
  return <ul>
    {todos.map((todo: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
      <li key={todo.id}>
        <Link href={`todos/${todo.id}`}>{todo.title}</Link>
      </li>
    ))}
  </ul>;
}

function wait(duration: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
