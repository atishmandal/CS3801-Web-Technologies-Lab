// Content for every dropdown sub-page lives here as plain data. App.jsx
// turns each entry into a <Route>, and SectionPage renders it. Keeping the
// content separate from the routing keeps App.jsx easy to read.
const sectionContent = [
  {
    path: "/academics/departments",
    eyebrow: "Academics",
    title: "Departments",
    paragraphs: [
      "The university is organized into departments covering Computer Science and Engineering, Electronics and Communication, Mechanical Engineering, Civil Engineering, and the Sciences and Humanities.",
      "Each department runs its own laboratories, seminar series, and student projects, while sharing common facilities such as the central library and computing center.",
    ],
  },
  {
    path: "/academics/programs",
    eyebrow: "Academics",
    title: "Programs Offered",
    paragraphs: [
      "XYZ University offers undergraduate programs (B.Tech), postgraduate programs (M.Tech and M.Sc), and doctoral programs (Ph.D) across engineering, science, and management disciplines.",
      "Programs combine core coursework with electives, lab work, and a final year project, so students leave with both theoretical grounding and hands on experience.",
    ],
  },
  {
    path: "/academics/calendar",
    eyebrow: "Academics",
    title: "Academic Calendar",
    paragraphs: [
      "The academic year is split into two semesters, each with its own registration period, teaching weeks, and examination schedule.",
      "Key dates, including semester start and end dates, holidays, and exam windows, are published at the start of every academic year and updated if there are changes.",
    ],
  },
  {
    path: "/admissions/undergraduate",
    eyebrow: "Admissions",
    title: "Undergraduate Admissions",
    paragraphs: [
      "Undergraduate admission is based on performance in a recognized entrance examination along with academic records from earlier schooling.",
      "The admissions office publishes eligibility criteria, application deadlines, and seat availability by department ahead of every intake cycle.",
    ],
  },
  {
    path: "/admissions/postgraduate",
    eyebrow: "Admissions",
    title: "Postgraduate Admissions",
    paragraphs: [
      "Postgraduate programs such as M.Tech and M.Sc admit students based on a qualifying degree, relevant entrance scores, and in some cases an interview.",
      "Applicants are encouraged to review department specific requirements, since research focus areas and prerequisite subjects vary between programs.",
    ],
  },
  {
    path: "/admissions/scholarships",
    eyebrow: "Admissions",
    title: "Scholarships",
    paragraphs: [
      "Merit based and need based scholarships are available to eligible students at both the undergraduate and postgraduate level.",
      "Applications are reviewed each semester, and continuing students must maintain a minimum academic standing to keep their scholarship active.",
    ],
  },
  {
    path: "/research/centers",
    eyebrow: "Research",
    title: "Research Centers",
    paragraphs: [
      "The university hosts dedicated research centers in areas including artificial intelligence, robotics, and renewable energy, each led by senior faculty.",
      "These centers work with graduate students and external partners on funded projects, and regularly host seminars open to the wider student body.",
    ],
  },
  {
    path: "/research/publications",
    eyebrow: "Research",
    title: "Publications",
    paragraphs: [
      "Faculty and graduate students publish regularly in peer reviewed journals and present their work at national and international conferences.",
      "A list of recent publications by department is maintained here, along with links to abstracts where available.",
    ],
  },
  {
    path: "/campus-life/hostels",
    eyebrow: "Campus Life",
    title: "Hostels",
    paragraphs: [
      "On campus housing is available for both undergraduate and postgraduate students, with separate blocks for men and women and rooms allotted by seniority and availability.",
      "Each hostel has common study areas, a dining hall, and a warden's office to handle day to day requests and concerns.",
    ],
  },
  {
    path: "/campus-life/clubs",
    eyebrow: "Campus Life",
    title: "Clubs and Events",
    paragraphs: [
      "Student clubs cover a wide range of interests, from technical and coding clubs to literary, cultural, and photography groups.",
      "Clubs run their own events through the year and come together for the university's annual technical and cultural festivals.",
    ],
  },
  {
    path: "/campus-life/sports",
    eyebrow: "Campus Life",
    title: "Sports",
    paragraphs: [
      "The campus has facilities for cricket, football, basketball, athletics, and several indoor games, along with a gymnasium open to all students.",
      "Inter department tournaments are held every semester, and students who qualify go on to represent the university at inter college meets.",
    ],
  },
];

export default sectionContent;
