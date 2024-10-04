import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { Introduction } from "../components/home/Introduction";
import { Divider } from "@mui/material";
import { Interests } from "../components/home/Interests";
import { WorkExperienceList } from "../components/experience/WorkExperienceList";
import { RecentWorkExperiences } from "../content/WorkExperienceList";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction></Introduction>
      <Divider></Divider>
      <Interests></Interests>
      <Divider></Divider>
      <WorkExperienceList
        work={RecentWorkExperiences}
        button="See More"
        link="/workExperience"
      />
      <Foot />
    </div>
  );
}
