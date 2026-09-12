const ACADEMY_RUBRICS = {
  defaultCase: {
    dimensions: [
      {
        id: "accuracy",
        label: "Technical Accuracy",
        weight: 40
      },
      {
        id: "analysis",
        label: "Case Analysis",
        weight: 25
      },
      {
        id: "documentation",
        label: "Documentation Quality",
        weight: 20
      },
      {
        id: "process",
        label: "Process & Sequencing",
        weight: 15
      }
    ],
    passingScore: 80
  },

  capstone: {
    dimensions: [
      {
        id: "eligibility",
        label: "Eligibility Analysis",
        weight: 20
      },
      {
        id: "hours",
        label: "1,250-Hour Analysis",
        weight: 15
      },
      {
        id: "leaveYear",
        label: "Leave-Year Application",
        weight: 20
      },
      {
        id: "entitlement",
        label: "Entitlement Calculation",
        weight: 20
      },
      {
        id: "documentation",
        label: "Case Documentation",
        weight: 15
      },
      {
        id: "judgment",
        label: "Case-Manager Judgment",
        weight: 10
      }
    ],
    passingScore: 85
  }
};
