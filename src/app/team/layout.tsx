export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>This is team header</h1>
      {children}
    </>
  );
}
