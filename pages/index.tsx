export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-4xl ">
        🚧The site is under construction🚧
      </h1>
      <span className="">
        Go to my 👉🏻{" "}
        <a
          className="text-blue-600 underline hover:text-red-500 transition-colors"
          href="https://github.com/lemokami"
        >
          Github
        </a>
        👈🏻 to find out more about me.
      </span>
    </div>
  );
}
