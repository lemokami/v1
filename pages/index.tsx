import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "./components/Layout";

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <Layout>
      <div className="h-full flex flex-col items-center justify-center font-primary">
        Hello
      </div>
    </Layout>
  );
}
