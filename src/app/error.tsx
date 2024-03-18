"use client";

export default function Error({ error, reset }: any) {
  return (
    <>
      <button onClick={reset}>Retry</button>
      <h1>{error.message} </h1>
    </>
  );
}
