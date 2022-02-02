import Layout from "./components/Layout";
import SocialBar from "./components/SocialBar";

type Props = {};

export default function Projects({}: Props) {
  return (
    <Layout>
      <div className="h-full flex flex-col items-center justify-center font-primary">
        Projects
      </div>
      <SocialBar />
    </Layout>
  );
}
