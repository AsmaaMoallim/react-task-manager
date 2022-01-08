const tasks = [
  {
    id: 1,
    text: "Appoiment",
    day: "Feb 4th at 4:00pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Exam",
    day: "March 5th at 6:00pm",
    reminder: true,
  },
  {
    id: 4,
    text: "Study",
    day: "Jun 6th at 10:00am",
    reminder: false,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((t) => (
        <h3 key={t.id}> {t.text} </h3>
      ))}
    </>
  );
};

export default Tasks;
