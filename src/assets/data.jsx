const data = () => {
  const studentsData = {
    status: 200,
    details: [
      {
        id: "020BIM001",
        name: "Aayush Shrestha",
        gender: "male",
      },
      {
        id: "020BIM002",
        name: "Aditya Sharma",
        gender: "male",
      },
      {
        id: "020BIM003",
        name: "Aman Sampang Rai",
        gender: "female",
      },
      {
        id: "020BIM004",
        name: "Akriti Niraula",
        gender: "female",
      },
      {
        id: "020BIM005",
        name: "Ankita Katuwal",
        gender: "female",
      },
      {
        id: "020BIM006",
        name: "Bhawana Khadka",
        gender: "female",
      },
      {
        id: "020BIM007",
        name: "Binita KUmari Mandal",
        gender: "female",
      },
      {
        id: "020BIM008",
        name: "Hem Narayan Chaudhary",
        gender: "male",
      },
      {
        id: "020BIM009",
        name: "Kalpana Khabarith",
        gender: "male",
      },
      {
        id: "020BIM010",
        name: "Mamata Rai",
        gender: "female",
      },
      {
        id: "020BIM011",
        name: "Manish Poudel",
        gender: "male",
      },
      {
        id: "020BIM012",
        name: "Nischal Bhattarai",
        gender: "male",
      },
      {
        id: "020BIM013",
        name: "Nishan Pradhan",
        gender: "male",
      },
      {
        id: "020BIM014",
        name: "Nabin Basnet",
        gender: "male",
      },
      {
        id: "020BIM015",
        name: "Pamela Rai",
        gender: "female",
      },
      {
        id: "020BIM016",
        name: "Parbat ",
        gender: "male",
      },
      {
        id: "020BIM017",
        name: "Parina",
        gender: "female",
      },
      {
        id: "020BIM018",
        name: "Puspan Magar",
        gender: "male",
      },
      {
        id: "020BIM019",
        name: "Pratik Rana Magar",
        gender: "male",
      },
      {
        id: "020BIM020", // Corrected duplicate ID
        name: "Roshan Sunwar",
        gender: "male",
      },
      {
        id: "020BIM021",
        name: "Ripesh Limbu",
        gender: "male",
      },
      {
        id: "020BIM022",
        name: "Shanti Rai",
        gender: "female",
      },
      {
        id: "020BIM023",
        name: "Susmena Budathoki",
        gender: "female",
      },
      {
        id: "020BIM024",
        name: "Utsav Satyal",
        gender: "male",
      },
      {
        id: "020BIM025",
        name: "Umesh Kumar Mehta",
        gender: "male",
      },
      {
        id: "020BIM026", // Corrected duplicate ID
        name: "Yamuna Acharya",
        gender: "female",
      },
    ],
  };
  const semesterData = {
    status: 200,
    detailss: [
      {
        id: "020BIM001",
        name: "Aayush Shrestha",
        gender: "male",
      },

    ],
  };
  const semestersData = {
    status: 200,
    semesters: {
      first: [
        {
          code: "dl",
          fullName: "Digital Logic",
          teacher: "Mr. Manish Rathi",
        },
        {
          code: "math",
          fullName: "Mathematics-I", // Corrected typo
          teacher: "Mr. Rajan",
        },
        {
          code: "st",
          fullName: "Society and Technology",
          teacher: "Mr. Ganesh Yogi",
        },
        {
          code: "cf",
          fullName: "Computer Fundamendal",
          teacher: "Mr. Nabin Shrestha",
        },
        {
          code: "s",
          fullName: "Society and Technology",
          teacher: "Mr. Ganesh Yogi",
        },
      ],
      fifth: [
        {
          code: "aiw",
          fullName: "Advance Internetworking",
          teacher: "Mr. Sanjay Kumar Yadav",
        },
        {
          code: "java",
          fullName: "Java Programming-II",
          teacher: "Mr. Ramesh Shahi",
        },
        {
          code: "cg",
          fullName: "Computer Graphics",
          teacher: "Mr. Ganesh Yogi",
        },
      ],
      sixth: [
        {
          code: "cyber",
          fullName: "Cyber Security",
          teacher: "Mr. Anish Shrestha",
        },
        {
          code: "se",
          fullName: "Software Engineering",
          teacher: "Mr. Rabin Maharjhan",
        },
      ],
    },
  };

  const getSemesterData = {
    status: 200,
    sem: [
      {
        title: "First Semester"
      },
      {
        title: "Second Semester"
      },
      {
        title: "Third Semester"
      },
      {
        title: "Fourth Semester"
      },
      {
        title: "Fifth Semester"
      },
      {
        title: "Sixth Semester"
      },
      {
        title: "Seventh Semester"
      },
      {
        title: "Eighth Semester"
      },
    ]
  };

  return { studentsData, semestersData, getSemesterData };
};

export default data;