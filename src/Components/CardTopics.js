import React, { useEffect, useState } from "react";

function CardTopics({ title, num, link }) {
  const [chapter, setChapter] = useState(null);

  // Function to visit the link and store chapter details in the localStorage stack
  const visitLink = () => {
    const newChapter = {
      num: num,
      title: title,
      datetime: new Date().toLocaleString(),
    };

    // Retrieve the existing stack of chapters from localStorage, or an empty array if not present
    const chapterStack = JSON.parse(localStorage.getItem("chapterLinks")) || [];

    // Add the new chapter to the stack
    chapterStack.push(newChapter);

    // Save the updated stack back to localStorage
    localStorage.setItem("chapterLinks", JSON.stringify(chapterStack));

    // Optionally update the state with the latest chapter
    setChapter(newChapter);
  };

  // Check if the current chapter is in the stack
  const chapterCheck = () => {
    const chapterStack = JSON.parse(localStorage.getItem("chapterLinks")) || [];
    return chapterStack.some(chapter => chapter.num === num);
  };

  // Effect to set the chapter details on mount
  useEffect(() => {
    const chapterStack = JSON.parse(localStorage.getItem("chapterLinks")) || [];
    const storedChapter = chapterStack.find(chapter => chapter.num === num);
    if (storedChapter) {
      setChapter(storedChapter);
    }
  }, [num]);

  return (
    <div className="card">
      <h1 style={{ color: "#E7A117", padding: "15px" }}>
        CHAPTER {num}:
      </h1>
      <h3 style={{ padding: "0px 15px" }}>{title}</h3>
      <div className="flex-center" style={{ padding: "15px", gap: "1em" }}>
        <div
          style={{
            width: "90%",
            height: "30px",
            backgroundColor: chapterCheck() ? "yellowgreen" : "gray",
            border: "none",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {chapterCheck() && chapter ? <p><i>{chapter.datetime}</i></p> : null}
        </div>
        <a className="card-btn" href={link} onClick={visitLink}>
          View <span className="chop">Chapter</span>
        </a>
      </div>
    </div>
  );
}

export default CardTopics;
