// A small reusable component: every page on the site shares the same
// layout (an eyebrow label, a heading, and body content), so instead of
// writing that JSX over and over, each page just passes different
// "eyebrow", "title", and "children" props.
function Page({ eyebrow, title, children }) {
  return (
    <div className="page">
      {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      <div className="page-content">{children}</div>
    </div>
  );
}

export default Page;
