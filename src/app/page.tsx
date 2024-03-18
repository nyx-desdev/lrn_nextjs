async function getTodos() {
  await wait(2000);
  throw new Error('sdfdas')
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}

export default async function Home() {
  const todos = await getTodos();
  return <h1>{todos.length}</h1>;
}

function wait(duration: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
