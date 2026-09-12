const ACADEMY_SCENARIOS = [
  {
    id: "SCN-FMLA-001",
    moduleId: "module-01",
    type: "decision",
    title: "Eligibility Investigation",
    caseId: "FMLA-001",
    objective: "Determine the correct order of an FMLA eligibility analysis.",
    decisions: [
      {
        id: "eligibility-first",
        label: "Establish eligibility before entitlement",
        correct: true
      },
      {
        id: "entitlement-first",
        label: "Calculate remaining entitlement first",
        correct: false
      }
    ]
  },
  {
    id: "SCN-FMLA-002",
    moduleId: "module-01",
    type: "audit",
    title: "Qualifying Hours Audit",
    caseId: "FMLA-003",
    objective: "Separate hours actually worked from paid non-worked time.",
    categories: [
      "regular_worked",
      "overtime_worked",
      "pto",
      "sick_leave",
      "holiday_not_worked",
      "other_non_worked"
    ]
  },
  {
    id: "SCN-FMLA-003",
    moduleId: "module-01",
    type: "calendar",
    title: "Leave-Year Calculation",
    caseId: "FMLA-007",
    objective: "Apply the employer's selected FMLA leave-year method to an entitlement calculation.",
    methods: [
      "calendar-year",
      "fixed-12-month",
      "forward-12-month",
      "rolling-backward"
    ]
  },
  {
    id: "SCN-FMLA-004",
    moduleId: "module-01",
    type: "intermittent",
    title: "Intermittent Leave Simulator",
    caseId: "FMLA-007",
    objective: "Calculate FMLA usage for intermittent absences based on the employee's normal schedule."
  }
];
