import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { Introduction } from "../components/home/Introduction";
import { Divider } from "@mui/material";
import { Interests } from "../components/home/Interests";
import { FeaturedWork } from "../components/home/FeaturedWork";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction></Introduction>
      <Divider></Divider>
      <Interests></Interests>
      <Divider></Divider>
      <FeaturedWork></FeaturedWork>
      <Foot />
    </div>
  );
}
