import Task from "../Task/Task";
export default function TaskList({ list, doneTask, trashListisClicked }) {
  console.log(list, "List");
  // console.log({ list }.list);
  // console.log("Type of: ", typeof list);
  // list.map((item) => console.log(item.name, item.false));
  return (
    <>
      {list.map((item, index) => {
        return (
          <Task
            key={index}
            task={item}
            doneTask={doneTask}
            trashListisClicked={trashListisClicked}
          ></Task>
        );
      })}
    </>
  );
}
