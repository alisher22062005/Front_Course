export default function Task({ task, doneTask }) {
  //   console.log(task, "Task");
  return (
    <>
      <div className="flex gap-[1rem] ml-[10%] mt-[1%] ">
        <input
          className=" flex justify-center"
          type="checkbox"
          onChange={() => {
            doneTask(task);
          }}
        ></input>
        <div className="flex items-center font-[Inter] font-medium">
          {task.name}
        </div>
      </div>
    </>
  );
}
