import StatefulButton from "../components/mybutton";

export default function HomePage() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>this is a paragraph</p>
      <a href="/about">My about page</a>

      <br />
      <br />
      <a href="/calculator">View my Calculator</a>
      <StatefulButton />
    </div>
  );
}
