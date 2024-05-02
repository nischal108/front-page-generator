import { saveAs } from "file-saver";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import Docxtemplater from "docxtemplater";

const GenerateDocument = (data) => {
  return new Promise((resolve, reject) => {
    const loadFile = (url, callback) => {
      PizZipUtils.getBinaryContent(url, callback);
    };

    loadFile(
      data.fullSubjectName === "Computer Graphics"
        ? "/template2.docx"
        : "/template2.docx",
      function (error, content) {
        if (error) {
          reject(error);
          return;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        doc.render({
          name: data.name,
          labnumber: data.labnumber,
          rollno: data.rollnumber,
          section: data.section,
          subject: data.fullSubjectName,
          teacherName: data.teacherName,
          semester: data.semester + " Semester",
        });

        const blob = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        if (
          blob.size > 0 &&
          blob.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          const timestamp = Date.now();
          const docxFileName = `${getFirstName(
            data.name
          ).toLowerCase()}_${data.subject.toUpperCase()}_${data.labnumber
            }_${timestamp}.docx`;
          const capitalizedFileName =
            docxFileName.charAt(0).toUpperCase() + docxFileName.slice(1);

          // saveAs(blob, capitalizedFileName);
          resolve({ blob, capitalizedFileName });
        } else {
          reject(new Error("Invalid blob type or empty blob"));
        }
      }
    );

    // Helper function to get the first name
    const getFirstName = (fullName) => {
      const parts = fullName.split(" ");
      return parts.length > 0 ? parts[1] : fullName;
    };
  })
};

export default GenerateDocument;
