import SubjectRadio from "./SubjectRadio";
import CustomsDropdown from "./StudentDropdown";
import SemesterDropdown from "./SemesterDropdown";
import SubjectDropdown from "./SubjectDropdown";


const FrontPageForm = ({
  handleSemesterChange,
  selectedSemester,
  subjectLists,
  showLabNumberInput,
  setShowPopup,
  handleFormData,
  isValidate,
  studentsData,
  getSemesterData,
  subjectData,
  showPopup
}) => {
  return (


    <form
      onSubmit={handleFormData}
      className="flex flex-col divide-y gap-2 w-[450px] border rounded-lg text-center drop-shadow-md bg-white border-gray-300 text-gray-700"
    >
      <h1 className="flex items-center justify-center h-12 pt-2 font-bold text-xl text-blue-500">
        Front Page Generator
      </h1>
      {/* <div className="flex items-center  w-full h-12 pt-2 px-2">
        <div className="flex-1">
          <input
            className="hidden"
            id="fifth"
            value="fifth"
            type="radio"
            name="semester"
            checked={selectedSemester === "fifth"}
            onChange={handleSemesterChange}
          />
          <label
            className="flex Flex-col h-12 w-full cursor-pointer justify-center
                        items-center rounded-lg"
            htmlFor="fifth"
          >
            <span className=" text-md uppercase">fifth sem</span>
          </label>
        </div>

        <div className="flex-1">
          <input
            className="hidden"
            id="sixth"
            value="sixth"
            type="radio"
            name="semester"
            checked={selectedSemester === "sixth"}
            onChange={handleSemesterChange}
          />
          <label
            className="flex Flex-col h-12 w-full  cursor-pointer justify-center
                        items-center rounded-lg"
            htmlFor="sixth"
          >
            <span className=" text-md uppercase">sixth sem</span>
          </label>
        </div>
      </div> */}

      <div className="form-group flex h-12 items-center w-full pt-2 px-2">
        <label className="w-1/5 label">Name:</label>
        <CustomsDropdown options={studentsData.details} />
      </div>
      <div className="form-group flex h-12 items-center w-full pt-2 px-2">
        <label className="w-1/5 label">Semester:</label>
        <SemesterDropdown options={getSemesterData.sem} />
      </div>

      <div className="flex h-12 items-center w-full pt-2 px-2">
        <label className="w-1/5 label" htmlFor="subject">
          Subject:
        </label>
        
        {/* < SubjectDropdown subjectData={subjectData.subjects} /> */}
        {/* <SemesterDropdown options={getSemesterData.sem} /> 
        <SemesterDropdown options={getSemesterData.sem} />  */}
        {/* <SubjectRadio subjectLists={subjectLists} showLabNumberInput={showLabNumberInput} /> */}
      </div>
      <div className="flex justify-end items-center pr-2">
        <button
          className="group relative z-100 overflow-hidden text-center font-normal bg-[#2856fb] text-white rounded-lg py-2 px-4 my-2 shadow-lg hover:scale-95"
          type="submit"
          id="submitBtn"
        >
          Generate Front Page
          <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-black/20"></div>
        </button>
      </div>
    </form>
  );
};

export default FrontPageForm;
