import { useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
export default function Menu() {
  const [typeWindowisClicked, setTypeWindowisClicked] = useState(false);
  const [toDoListisClicked, setToDoListisClicked] = useState(true);
  const [trashListisClicked, setTrashListisClicked] = useState(false);
  const [doneListisClicked, setDoneListisClicked] = useState(false);
  const [currentList, setCurrentList] = useState();
  const [arrayToDoList, setArrayToDoList] = useState([
    { name: "Go to the gym", done: false },
    { name: "Do homework", done: false },
  ]);

  const [currentTask, setCurrentTask] = useState("");
  useEffect(() => {
    const data = JSON.stringify(arrayToDoList);
    localStorage.setItem("array", data);
    // console.log(localStorage.length);
  }, [arrayToDoList]);

  function handleTypeWindowButton() {
    typeWindowisClicked
      ? setTypeWindowisClicked(false)
      : setTypeWindowisClicked(true);
  }

  function handleCurrentList(list) {
    if (list == "To Do") {
      setToDoListisClicked(true);
      setTrashListisClicked(false);
      setDoneListisClicked(false);
    } else if (list == "Trash") {
      setToDoListisClicked(false);
      setTrashListisClicked(true);
      setDoneListisClicked(false);
    } else if (list == "Done") {
      setToDoListisClicked(false);
      setTrashListisClicked(false);
      setDoneListisClicked(true);
    }
  }
  function addTask() {
    const newTask = { name: currentTask, done: false };
    setArrayToDoList((prev) => [...prev, newTask]);
    setCurrentTask("");
  }
  const doneTask = (task) => {
    setArrayToDoList((prev) =>
      prev.map((item) => {
        return item.name == task.name ? { ...item, done: !item.done } : item;
      })
    );

    console.log(arrayToDoList, "Menu");
  };

  return (
    <>
      <div className="flex  ml-[10%] mt-[10%] font-[Inter] gap-[15%]  ">
        <div className="flex flex-col gap-[7rem] ">
          <div className="flex flex-col gap-[2rem]">
            <div className="text-[2.5rem] font-bold">Simple To Do List</div>
            <div>
              Today is awesome day. The weather is awesome, you are awesome too!
            </div>
          </div>
          <div className="flex gap-[2rem]">
            <button
              onClick={() => handleCurrentList("To Do")}
              //   className="w-[20%] bg-red-300 rounded-[9999px] p-[2%]"
              className={
                toDoListisClicked
                  ? "w-[20%] bg-[#081E346B] rounded-[9999px] p-[2%]"
                  : "w-[20%] bg-[#F0F0F0] rounded-[9999px] p-[2%]"
              }
            >
              To Do
            </button>
            <button
              onClick={() => handleCurrentList("Done")}
              className={
                doneListisClicked
                  ? "w-[20%] bg-[#081E346B] rounded-[9999px] p-[2%]"
                  : "w-[20%] bg-[#F0F0F0] rounded-[9999px] p-[2%]"
              }
            >
              Done
            </button>
            <button
              onClick={() => handleCurrentList("Trash")}
              className={
                trashListisClicked
                  ? "w-[20%] bg-[#081E346B] rounded-[9999px] p-[2%]"
                  : "w-[20%] bg-[#F0F0F0] rounded-[9999px] p-[2%]"
              }
            >
              Trash
            </button>
          </div>
        </div>
        <div className="flex gap-[1rem] ">
          {typeWindowisClicked && (
            <div className="flex flex-col gap-[1.5rem] rounded-[0.5rem]  bg-[#E4E6E7] p-[5%]">
              <div className="flex items-center ">Add New To Do</div>
              <div className=" ">
                <textarea
                  placeholder="Type..."
                  // defaultValue="Type..."
                  rows={4}
                  cols={40}
                  value={currentTask}
                  onChange={(e) => setCurrentTask(e.target.value)}
                  className=" w-[95%] p-[5%] rounded-[0.5rem] "
                ></textarea>
              </div>
              <div>
                <button
                  onClick={addTask}
                  className="bg-black text-white w-[30%] p-[3%] rounded-[9999px]"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col-reverse  bg-red-300">
            <button
              onClick={handleTypeWindowButton}
              className="w-[4rem] bg-blue-300 rounded-[50%] p-[3%] text-[2rem]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-blue-500 ml-[10%] mt-[3%] flex flex-col gap-[2rem]">
        <div className="font-medium text-[2rem]    ">Done</div>
        <hr className="border-2 w-[90%]"></hr>
      </div>
      <TaskList list={arrayToDoList} doneTask={doneTask}></TaskList>
    </>
  );
}
