import { Heart, Users, GraduationCap, Building2, Award, BookOpen, Briefcase } from "lucide-react";

// programs
import founderImage from '../public/images/founder_little.jpeg'
import childrenAudience from '../public/images/children_audience.jpeg'
import womensDay from '../public/images/womens_Day.jpeg'
import youthEmpowerment from '../public/images/accolades.jpeg';
import Morempowerment from '../public/images/accolades_2.jpeg';
import communityEmpowerment from '../public/images/community.jpeg';

// stories
import aminaKadzo from '../public/images/arrival2.jpeg'; 
import kevinMwangi from '../public/images/tree_planting_2.jpeg';

// gallary items
import waterStream from "../public/images/water_stream.jpeg";
import crops from "../public/images/crops.jpeg"; 

export const programs = [
  {
    title: "Orphans & Vulnerable Children",
    icon: Heart,
    image: childrenAudience, // Replace with real asset path
    description: "Providing educational support, nutrition, clothing, mentorship, and vital welfare assistance to ensure safety and care."
  },
  {
    title: "Women Empowerment",
    icon: Users,
    image: womensDay, // Replace with real asset path
    description: "Enhancing grassroots livelihoods through modern business entrepreneurship, seed funding, and structured micro-finance."
  },
  {
    title: "Youth Empowerment",
    icon: GraduationCap,
    image: youthEmpowerment, // Replace with real asset path
    description: "Offering technical vocational training, digital literacy pipelines, and peer mentorship paths for local jobs."
  },
  {
    title: "Community Development",
    icon: Building2,
    image: communityEmpowerment, // Replace with real asset path
    description: "Building community resilience through clean water infrastructure access, hygiene training, and collaborative unity."
  }
];

export const impactStats = [
  { value: "15+", label: "Years of Service" },
  { value: "500+", label: "Children Supported" },
  { value: "300+", label: "Women Empowered" },
  { value: "200+", label: "Youth Trained" }
];

export const stories = [
  {
    name: "Beneficiary",
    role: "Tailoring Business Owner",
    image: aminaKadzo,
    quote: "The tailored business design skills and startup kit I acquired enabled me to build a sustainable local shop. Today, I comfortably fund my children's entire school journey completely on my own earnings."
  },
  {
    name: "Beneficiary",
    role: "Engineering Apprentice",
    image: kevinMwangi,
    quote: "Isolated and out of school options, their deep youth mentorship framework reconnected me with automotive engineering vocational paths. I am now happily stepping confidently into my future career."
  }
];

export const galleryItems = [
  {
    image: Morempowerment,
    title: "Educational Material Drive",
    description: "Distributing backpacks, calculators, books, and uniforms to eager primary students ahead of the academic year."
  },
  {
    image: womensDay,
    title: "Financial Literacy Summit",
    description: "Women leaders mapping monthly savings group logs during an interactive community business seminar."
  },
 { 
  image: crops, 
  title: "Sustainable Food Production", 
  description: "Comprehensive practical training covering the entire crop lifecycle from seed sowing to optimal harvesting techniques." 
},

  {
    image: waterStream,
    title: "Clean Water Well Launch",
    description: "Celebrating shared access to a reliable fresh-water borehole serving multiple partner villages."
  }
];



export const founderData = {
  name: "Philomenah Chebetibin Bineah-Kapkory",
  title: "Founder & Executive Director, FLA–Kenya",
  image: founderImage, // Replace with real asset path
  signatureQuote: "Every child deserves a safe environment, an opportunity to thrive, and a future filled with hope.",
  originText: "Born and raised in the Mt. Elgon region (spanning Bungoma and Trans Nzoia counties), Philomenah witnessed firsthand the devastating aftermath of the 2005–2007 structural regional conflicts. The loss of loved ones, alongside the personal tragedy of losing three sisters who left behind young families, sparked an urgent calling to create sustainable community safety nets.",
  careerText: "Transitioning from a distinguished multi-year career in corporate banking management, she redirected her leadership expertise into public service and grassroots advocacy—founding FLA-Kenya to systematically restore economic dignity to vulnerable widows, youth, and children.",
  credentials: [
    { icon: GraduationCap, label: "PhD Candidate", desc: "Project Planning & Management (Monitoring & Evaluation)" },
    { icon: Award, label: "Master's Degree", desc: "Project Planning and Management" },
    { icon: BookOpen, label: "Bachelor's Degree", desc: "Business Management (HRM) - 1st Class Honours" },
    { icon: Briefcase, label: "Banking Alumna", desc: "Extensive Institutional Leadership & Engagement" }
  ]
};