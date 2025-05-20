import NewsItem from "../NewsItem/NewsItem.jsx";

export default function NewsList({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <NewsItem key={index} info={item} />
      ))}
    </>
  );
}
