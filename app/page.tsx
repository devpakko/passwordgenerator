import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-900 text-white h-lvh">
      <div className="flex flex-col items-center justify-center">
        <h1>Generate Random Password</h1>
        <Form />
      </div>
    </main>
  );
}
