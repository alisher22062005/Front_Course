import "./NewsItem.css";

export default function NewsItem({ info }) {
  function click(url) {
    window.open(url, "_blank");
  }
  // console.log(info);
  return (
    <>
      <div className="flex gap-[5%] lg:flex-row  sm:flex-col sm:justify-center sm:items-center sm:flex-col-reverse">
        <div className="flex flex-col pt-20 pb-20 gap-8 w-[60%] ">
          <div style={{ fontFamily: "Inter" }} className="font-semibold">
            Author's name <span style={{ color: "#081e341f" }}> in</span> Topics
            Name
          </div>

          <div
            style={{ fontFamily: "Kanit" }}
            className="font-black text-[2rem] "
          >
            {info.title}
          </div>
          <div
            className="font-normal text-lg"
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            {info.abstract}
          </div>
          <div className="flex gap-8 sm:justify-center xl:justify-start ">
            <button
              onClick={() => click(info.url)}
              className="br-9999 bg-[#081E341F] p-2 rounded-[9999px]   text-[1rem]"
            >
              Read more
            </button>
            <div className="flex justify-center items-center text-[#081e341f] font-black text-[1.2rem]">
              {info.published_date.slice(0, 10)}
            </div>
            <div className="  sm:hidden xl:flex justify-center items-center text-[#081e341f] font-black text-[1.2rem]">
              Selected for you
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center">
          <img
            className="lg:w-[70%] lg:h-[70%] sm:w-[65%] sm:h-[25%]  sm:rounded-[10%] "
            src={info.multimedia[1].url}
          ></img>
        </div>
      </div>
    </>
  );
}
