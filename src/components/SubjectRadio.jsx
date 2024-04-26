const SubjectRadio = ({ subjectLists, showLabNumberInput }) =>
  subjectLists.map((subjectList, index) => (
    <div
      className="flex-1 flex-grow h-12 items-center justify-center "
      key={subjectList.code}
    >
      <input
        className="hidden"
        value={subjectList.code}
        id={subjectList.code}
        type="radio"
        name="subject"
        onChange={showLabNumberInput}
        defaultChecked={index === 0}
      />
      <label
        className="flex flex-col h-12 w-full cursor-pointer justify-center items-center rounded-lg"
        htmlFor={subjectList.code}
      >
        <span className="text-md uppercase">{subjectList.code}</span>
      </label>
    </div>
  ));

export default SubjectRadio;
