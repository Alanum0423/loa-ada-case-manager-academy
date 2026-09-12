const ACADEMY_CASES = [
  {
    id: "FMLA-001",
    moduleId: "module-01",
    zoneId: "eligibility-investigation",
    title: "Jordan Miller",
    difficulty: "Foundational",
    status: "active",
    summary:
      "Determine eligibility, qualifying hours, and workweek-based intermittent leave usage.",
    employee: {
      name: "Jordan Miller",
      leaveStart: "September 21, 2026",
      normalSchedule: "32 hours/week",
      weeklyHours: 32,
      service: "2 years"
    },
    payroll: {
      regularWorked: 1180,
      overtimeWorked: 74,
      pto: 80,
      sickLeave: 32,
      holidayNotWorked: 16
    },
    qualifyingHours: 1254,
    workweekMath: {
      absenceHours: 4,
      employeeWorkweek: 32,
      expectedFraction: 0.125,
      comparisonWorkweek: 40,
      comparisonFraction: 0.1
    },
    objectives: [
      "Establish eligibility before entitlement.",
      "Identify hours actually worked for the 1,250-hour requirement.",
      "Exclude paid time that was not actually worked from qualifying hours.",
      "Calculate intermittent leave as a fraction of the employee's actual workweek."
    ]
  },
  {
    id: "FMLA-002",
    moduleId: "module-01",
    zoneId: "eligibility-investigation",
    title: "Service Date Review",
    difficulty: "Intermediate",
    status: "queued",
    summary:
      "Analyze prior employment and a break in service when determining the 12-month requirement.",
    objectives: [
      "Identify the relevant employment periods.",
      "Distinguish ordinary breaks from protected exceptions.",
      "Determine whether the employee satisfies the 12-month service requirement."
    ]
  },
  {
    id: "FMLA-003",
    moduleId: "module-01",
    zoneId: "hours-investigation",
    title: "The 1,250-Hour Audit",
    difficulty: "Intermediate",
    status: "queued",
    summary:
      "Audit a complicated payroll record and identify which categories represent hours actually worked.",
    objectives: [
      "Classify payroll categories correctly.",
      "Calculate qualifying hours.",
      "Identify the evidence needed to support an hours-worked determination."
    ]
  },
  {
    id: "FMLA-004",
    moduleId: "module-01",
    zoneId: "hours-investigation",
    title: "Paid Time Is Not Always Worked Time",
    difficulty: "Intermediate",
    status: "queued",
    summary:
      "Resolve conflicting payroll categories involving PTO, sick leave, holidays, and actual work.",
    objectives: [
      "Separate paid time from hours actually worked.",
      "Recognize when overtime contributes to the qualifying-hours total.",
      "Document the calculation clearly."
    ]
  },
  {
    id: "FMLA-005",
    moduleId: "module-01",
    zoneId: "eligibility-investigation",
    title: "The Employment Break",
    difficulty: "Advanced",
    status: "queued",
    summary:
      "Investigate a rehire scenario and determine which prior employment periods may be relevant.",
    objectives: [
      "Analyze employment continuity.",
      "Recognize exceptions involving military service and written agreements.",
      "Reach a defensible service-date determination."
    ]
  },
  {
    id: "FMLA-006",
    moduleId: "module-01",
    zoneId: "eligibility-investigation",
    title: "The 75-Mile Question",
    difficulty: "Advanced",
    status: "queued",
    summary:
      "Determine whether the employee's worksite satisfies the applicable 50-employee and 75-mile requirements.",
    objectives: [
      "Identify the relevant worksite.",
      "Evaluate the 50-employee threshold.",
      "Apply the 75-mile geographic requirement correctly."
    ]
  },
  {
    id: "FMLA-007",
    moduleId: "module-01",
    zoneId: "capstone",
    title: "Maria Rodriguez",
    difficulty: "Capstone",
    status: "locked",
    summary:
      "Complete a full FMLA case investigation involving a variable schedule, prior leave usage, a rolling backward leave year, a holiday, and intermittent leave.",
    objectives: [
      "Build a complete eligibility determination.",
      "Audit qualifying hours.",
      "Apply the employer's leave-year methodology.",
      "Calculate available entitlement.",
      "Analyze intermittent leave against certification parameters.",
      "Produce a defensible case determination."
    ]
  }
];
