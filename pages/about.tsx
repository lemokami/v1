import Layout from "./components/Layout";

type Props = {};

export default function About({}: Props) {
  return (
    <Layout>
      <div className="h-full flex flex-col items-center justify-center font-primary">
        About
      </div>
    </Layout>
  );
}