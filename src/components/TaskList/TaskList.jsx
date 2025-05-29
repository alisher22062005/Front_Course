import Task from "../Task/Task";
export default function TaskList({ list, doneTask }) {
  console.log(list, "List");
  return (
    <>
      {list.map((item, index) => {
        return <Task key={index} task={item} doneTask={doneTask}></Task>;
      })}
    </>
  );
}
