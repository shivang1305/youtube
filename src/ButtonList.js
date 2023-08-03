import Button from "./Button";

const ButtonList = () => {
  const buttonNamesList = [
    "All",
    "Live",
    "Cricket",
    "Table Tennis",
    "Technology",
    "React",
    "Frontend",
    "Redux",
    "Comedy",
    "Jobs",
  ];
  return (
    <div className="flex">
      {buttonNamesList.map((btnName) => {
        return <Button name={btnName} />;
      })}
    </div>
  );
};

export default ButtonList;
