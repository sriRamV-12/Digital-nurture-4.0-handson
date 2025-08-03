import { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("book");

  const renderComponent = () => {
    switch (view) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <p>Select a view.</p>;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setView("book")}>Book</button>
        <button onClick={() => setView("blog")}>Blog</button>
        <button onClick={() => setView("course")}>Course</button>
      </div>

      {view === "book" && <p>📘 Currently showing Book details</p>}
      {view === "blog" && <p>📝 Currently showing Blog details</p>}
      {view === "course" && <p>🎓 Currently showing Course details</p>}

      <hr />
      {renderComponent()}
    </div>
  );
}

export default App;
