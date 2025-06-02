import { useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import MenuDefault from "../MenuDefault/MenuDefault";
export default function Menu() {
  const [typeWindowisClicked, setTypeWindowisClicked] = useState(false);
  const [currentButton, setCurrentButton] = useState("To Do");
  const [toDoListisClicked, setToDoListisClicked] = useState(true);
  const [trashListisClicked, setTrashListisClicked] = useState(false);
  const [doneListisClicked, setDoneListisClicked] = useState(false);
  const [currentList, setCurrentList] = useState(() => {
    const data = localStorage.getItem("array");
    if (!data) return [];

    const newArray = JSON.parse(data);

    return newArray.filter((item) => !item.done && !item.deleted);
  });
  const [arrayToDoList, setArrayToDoList] = useState(() => {
    const data = localStorage.getItem("array");
    return data ? JSON.parse(data) : [];
  });

  const [currentTask, setCurrentTask] = useState("");

  useEffect(() => {
    const data = JSON.stringify(arrayToDoList);
    localStorage.setItem("array", data);
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
      setCurrentButton("To Do");

      const newArray = arrayToDoList.filter(
        (item) => item.done == false && item.deleted == false
      );

      setCurrentList(newArray);
      console.log(currentList, "Current list");
    } else if (list == "Trash") {
      setToDoListisClicked(false);
      setTrashListisClicked(true);
      setDoneListisClicked(false);
      setCurrentButton("Trash");
      const newArray = arrayToDoList.filter((item) => item.deleted);
      setCurrentList(newArray);
    } else if (list == "Done") {
      setToDoListisClicked(false);
      setTrashListisClicked(false);
      setDoneListisClicked(true);
      setCurrentButton("Done");

      const newArray = arrayToDoList.filter((item) => {
        return item.done && !item.deleted;
      });
      if (newArray) setCurrentList(newArray);
    }
  }
  function addTask() {
    const newTask = { name: currentTask, done: false, deleted: false };
    let newArray;

    arrayToDoList
      ? (newArray = [...arrayToDoList, newTask])
      : (newArray = newTask);

    setArrayToDoList(newArray);

    setCurrentTask("");

    if (toDoListisClicked) {
      const updatedCurrentList = newArray.filter(
        (item) => !item.done && !item.deleted
      );
      setCurrentList(updatedCurrentList);
    }
  }
  const doneTask = (task) => {
    {
      const newArray = arrayToDoList.map((item) =>
        task.name == item.name
          ? {
              ...item,
              done: !item.done,
            }
          : item
      );
      setArrayToDoList(newArray);

      setCurrentList((prev) =>
        prev.map((item) => {
          return task.name == item.name ? { ...item, done: !item.done } : item;
        })
      );
    }
  };

  const deleteTask = () => {
    const array = currentList.filter((item) => item.done);
    console.log(array, "array");
    console.log(arrayToDoList, "arrayToDo");
    const newArray = arrayToDoList.map((item1) => {
      const match = array.find((item2) => item1.name == item2.name);
      return match ? { ...item1, done: false, deleted: true } : item1;
    });
    setArrayToDoList(newArray);
    setCurrentList((prev) => {
      return prev.filter((item) => !item.done && !item.deleted);
    });
  };

  function deleteForever() {
    const deletedTasks = currentList.filter((item) => item.done);
    const newArray = arrayToDoList.filter((item1) => {
      const match = deletedTasks.find((item2) => {
        return item2.name == item1.name;
      });
      return !match;
    });

    setArrayToDoList(newArray);
    const updatedCurrentList = currentList.filter((item1) => {
      const match = deletedTasks.find((item2) => item2.name == item1.name);
      return !match;
    });
    setCurrentList(updatedCurrentList);
    localStorage.setItem("array", newArray);
  }

  function moveBackToToDo() {
    const doneTasks = currentList.filter((item) => item.done);
    const newArray = arrayToDoList.map((item1) => {
      const match = doneTasks.find((item2) => item2.name == item1.name);
      return match
        ? { ...item1, done: !item1.done, deleted: !item1.deleted }
        : item1;
    });
    setArrayToDoList(newArray);
    setCurrentList((prev) => {
      return prev.filter((item) => !item.done && item.deleted);
    });
  }

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

          <div className="flex flex-col-reverse  ">
            <button
              onClick={handleTypeWindowButton}
              className="w-[4rem] bg-black rounded-[50%] p-[3%] text-[2rem] text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-blue-500 ml-[10%] mt-[3%] flex flex-col gap-[2rem]">
        <div className="font-medium text-[2rem]    ">{currentButton}</div>
        <hr className="border-2 w-[90%]"></hr>
      </div>
      {currentList.length > 0 && (
        <TaskList
          list={currentList}
          doneTask={doneTask}
          trashListisClicked={trashListisClicked}
        ></TaskList>
      )}
      <MenuDefault
        list={currentList}
        toDoListisClicked={toDoListisClicked}
        deleteTask={deleteTask}
        trashListisClicked={trashListisClicked}
        deleteForever={deleteForever}
        moveBackToToDo={moveBackToToDo}
      ></MenuDefault>
    </>
  );
}
