
import express from "express";
const router = express.Router();


const educationData = [
  {
    from: "1966",
    to: "1968",
    school: "Wharton School, UPenn",
    degree: "Bachelor's Degree",
    major: "Economics",
  },
  {
    from: "1959",
    to: "1964",
    school: "New York Military Academy",
    degree: "High School Diploma",
    major: "",
  },
];

const experienceData = [
  {
    from: "2017",
    to: "2021",
    role: "45th President of the United States",
    company: "The White House",
    location: "Washington, D.C.",
  },
  {
    from: "1971",
    to: "Present",
    role: "President",
    company: "The Trump Organization",
    location: "New York, NY",
  },
];



// GET /fetch/getEdu
router.get("/getEdu", (req, res) => {
  res.json(educationData);
});

// GET /fetch/getExp
router.get("/getExp", (req, res) => {
  res.json(experienceData);
});

// GET /fetch/getOverview
router.get("/getOverview", (req, res) => {
  res.json(overviewData);
});

export default router;
