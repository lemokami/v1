import Illustration from "./components/Illustration";
import Layout from "./components/Layout";
import SocialBar from "./components/SocialBar";

export default function Home() {
  return (
    <Layout>
      <div className="h-full flex flex-col font-primary items-start justify-center font-bold text-primary">
        <div className="z-50">
          <span className="tracking-spaced text-2xl">私はレモカミです</span>
          <h1 className="text-8xl tracking-wider capitalize">
            jesswin <span className="text-secondary">W</span>
          </h1>
          <h1 className="text-8xl tracking-wider capitalize">varghese</h1>
        </div>
        <Illustration />
        <SocialBar />
      </div>
    </Layout>
  );
}
