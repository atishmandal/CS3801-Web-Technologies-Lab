import Page from "../components/Page";

// One reusable component for all the simple dropdown sub-pages
// (Departments, Programs, Scholarships, and so on). App.jsx passes a
// different "eyebrow", "title", and "paragraphs" prop for each route, so
// we do not need a separate file for every single menu item.
function SectionPage({ eyebrow, title, paragraphs }) {
  return (
    <Page eyebrow={eyebrow} title={title}>
      {paragraphs.map((paragraph, index) => (
        // Index is fine as a key here since this list never reorders.
        <p key={index}>{paragraph}</p>
      ))}
    </Page>
  );
}

export default SectionPage;
