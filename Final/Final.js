const companies = [
  { name: "Company A", requiredSkills: ["Marketing", "Sales", "Management"] },
  { name: "Company B", requiredSkills: ["Engineering", "Product Development"] },
  {
    name: "Company C",
    requiredSkills: ["Finance", "Investment", "Accounting"],
  },
  { name: "Company D", requiredSkills: ["Marketing", "Product Development"] },
];

const interns = [
  { name: "Intern 1", skills: ["Marketing", "Sales", "Management"] },
  { name: "Intern 2", skills: ["Engineering", "Product Development"] },
  { name: "Intern 3", skills: ["Finance", "Investment"] },
  { name: "Intern 4", skills: ["Engineering", "Product Development"] },
];

function displayCompanies() {
  const companiesList = document.getElementById("companiesList");
  companiesList.innerHTML = "";
  companies.forEach((company) => {
    const li = document.createElement("li");
    li.textContent = `${
      company.name
    } - Required Skills: ${company.requiredSkills.join(", ")}`;
    companiesList.appendChild(li);
  });
}

function displayInterns() {
  const internsList = document.getElementById("internsList");
  internsList.innerHTML = "";
  interns.forEach((intern) => {
    const li = document.createElement("li");
    li.textContent = `${intern.name} - Skills: ${intern.skills.join(", ")}`;
    internsList.appendChild(li);
  });
}

function createSkillOptions() {
  const skillSelection = document.getElementById("skillSelection");

  const internSkills = interns.flatMap((intern) => intern.skills);
  const uniqueSkills = [...new Set(internSkills)];

  uniqueSkills.forEach((skill) => {
    const option = document.createElement("option");
    option.value = skill;
    option.textContent = skill;
    skillSelection.appendChild(option);
  });
}
    
function match() {
  const skillSelection = document.getElementById("skillSelection");
  const selectedSkill = skillSelection.value;

  const matchResult = document.getElementById("matchResult");
  matchResult.textContent = "";

  companies.forEach((company) => {
    if (company.requiredSkills.includes(selectedSkill)) {
      matchResult.innerHTML += `<p>${company.name} matched with ${selectedSkill}</p>`;
    } else {
      matchResult.innerHTML += `<p>${company.name} not matched with ${selectedSkill}</p>`;
    }
    function generateRandomSkills() {
      const skills = [
        "Marketing",
        "Sales",
        "Management",
        "Engineering",
        "Product Development",
        "Finance",
        "Investment",
        "Accounting",
      ];

      const numSkills = Math.floor(Math.random() * skills.length) + 1;
      const shuffledSkills = skills.sort(() => Math.random() - 0.5);
      return shuffledSkills.slice(0, numSkills);
    }

    const companies = [
      { name: "Company A", requiredSkills: generateRandomSkills() },
      { name: "Company B", requiredSkills: generateRandomSkills() },
      { name: "Company C", requiredSkills: generateRandomSkills() },
      { name: "Company D", requiredSkills: generateRandomSkills() },
    ];

    const interns = [
      { name: "Intern 1", skills: ["Marketing", "Sales", "Management"] },
      { name: "Intern 2", skills: ["Engineering", "Product Development"] },
      { name: "Intern 3", skills: ["Finance", "Investment"] },
      { name: "Intern 4", skills: ["Engineering", "Product Development"] },
    ];

    function displayCompanies() {
      const companiesList = document.getElementById("companiesList");
      companiesList.innerHTML = "";
      companies.forEach((company) => {
        const li = document.createElement("li");
        li.textContent = `${
          company.name
        } - Required Skills: ${company.requiredSkills.join(", ")}`;
        companiesList.appendChild(li);
      });
    }

    // ฟังก์ชันอื่น ๆ เหมือนเดิม...

    displayCompanies();
    createSkillOptions();

  });
}


  ;


displayCompanies();
displayInterns();
createSkillOptions();
