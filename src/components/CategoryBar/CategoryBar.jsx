import "./CategoryBar.css";

const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "AI",
  "React",
  "Java",
  "Programming",
  "Live",
  "Podcasts",
  "Sports",
  "Movies"
];

function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((item, index) => (
        <button
          key={index}
          className={index === 0 ? "active" : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;