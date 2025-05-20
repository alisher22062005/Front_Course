import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import NewsList from "./components/NewsList/NewsList.jsx";
function App() {
  // const [count, setCount] = useState(0);
  // let allData = [];
  const [allData, setAllData] = useState([[], []]);

  useEffect(() => {
    async function getServer() {
      const response = await fetch(
        "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=Gx0zXJfX0mCRmO7YG1DMy2SZh5y24sAi"
      );
      if (response.ok) {
        const data = await response.json();

        const news = data.results;
        const news_travel = news
          .filter((item) => {
            return item.section === "travel";
          })
          .slice(0, 3);
        const news_business = news
          .filter((item) => {
            return item.section === "business";
          })
          .slice(0, 3);

        setAllData([news_business, news_travel]);
      } else {
        alert("No access to the server");
      }
    }

    getServer();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:gap-12 lg:ml-40 lg:mt-40 sm:ml-25 sm:mt-25  ">
        <div
          style={{ fontFamily: "Inter", fontSize: "3rem" }}
          className=" lg:pb-0 font-inter font-bold sm:pb-[10%]"
        >
          Breaking News
        </div>
        <div className="">
          {allData.map((item, index) => {
            return <NewsList key={index} data={item}></NewsList>;
          })}
          {/* <NewsList data={allData[0]}></NewsList> */}
        </div>
      </div>
    </>
  );
}

export default App;
