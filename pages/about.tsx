import { useState } from "react";
import Illustration from "./components/Illustration";
import Layout from "./components/Layout";
import SocialBar from "./components/SocialBar";

type Props = {};
const descriptions = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste aut",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat  iste aut facere reiciendis obcaecati sunt dolorem vero quo?  Repellendus, adipisci?",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat  iste aut facere reiciendis obcaecati sunt dolorem vero quo?  Repellendus, adipisci?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat  iste aut facere reiciendis obcaecati sunt dolorem vero quo?  Repellendus, adipisci?",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat  iste aut facere reiciendis obcaecati sunt dolorem vero quo?  Repellendus, adipisci?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat  iste aut facere reiciendis obcaecati sunt dolorem vero quo?  Repellendus, adipisci?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat  iste aut facere reiciendis obcaecati sunt dolorem vero quo?  Repellendus, adipisci?",
];
export default function About({}: Props) {
  const [rangeValue, setRangeValue] = useState(1);

  return (
    <Layout>
      <div className="h-full flex flex-col justify-center font-primary">
        <div className="flex flex-col justify-between h-1/2 w-1/2 z-">
          <span className="font-primary font-bold">
            <span>
              <h3 className="text-xl">Hi There, I'm</h3>
              <h1 className="text-6xl">
                jesswin <span className="text-secondary">W</span> varghese
              </h1>
            </span>

            {descriptions.map((desc, index) => {
              if (index === rangeValue)
                return (
                  <p className="font-secondary font-normal text-lg mt-4 z-50">
                    {desc}
                  </p>
                );
            })}
          </span>
          <div className="mr-32 py-8 relative font-secondary">
            <input
              type="range"
              name="decription"
              min="0"
              max="3"
              value={rangeValue}
              onChange={(e) => setRangeValue(+e.target.value)}
              className="rounded-full appearance-none bg-[#f1f1f1] h-2 w-full"
            />
            {/* dots in the range bar */}
            <div className="flex items-center justify-between absolute w-full top-9 -z-10">
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
            </div>
            <span className="absolute -left-4 top-0">shortest</span>
            <span className="absolute -right-4 top-0">longest</span>
          </div>
        </div>
        <Illustration />
      </div>
      <SocialBar />
    </Layout>
  );
}
