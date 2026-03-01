import skillsImg from "../assets/overview/skills.jpeg";
import journeyImg from "../assets/overview/journey.jpeg";
import certImg from "../assets/overview/certificates.jpeg";
import vibesImg from "../assets/vibes.jpeg"; // ✅ CORRECT PATH

const overview = [
  {
    id: "skills",
    title: "Technical Skills",
    subtitle: "Programming, ML, Web & Data",
    image: skillsImg,
    link: "/skills",
  },
  {
    id: "journey",
    title: "Journey",
    subtitle: "Education timeline",
    image: journeyImg,
    link: "/journey",
  },
  {
    id: "certificates",
    title: "Certificates",
    subtitle: "Verified skills & achievements",
    image: certImg,
    link: "/certificates",
  },
  {
    id: "vibes",
    title: "Lately Vibing",
    subtitle: "What I listen to while building",
    image: vibesImg,
    link: "/vibes",
  },
];

export default overview;