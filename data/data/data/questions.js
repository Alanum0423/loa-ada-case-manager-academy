const ACADEMY_QUESTIONS = [
  {
    id: "FMLA-001-Q01",
    caseId: "FMLA-001",
    type: "decision",
    sequence: 1,

    eyebrow: "FIRST DECISION",

    prompt:
      "What should you establish before calculating FMLA entitlement?",

    options: [
      {
        id: "A",
        text: "Remaining FMLA entitlement",
        correct: false
      },
      {
        id: "B",
        text: "FMLA eligibility requirements",
        correct: true
      },
      {
        id: "C",
        text: "Whether the employee used PTO",
        correct: false
      },
      {
        id: "D",
        text: "Whether the employee prefers intermittent leave",
        correct: false
      }
    ],

    correctFeedback:
      "Eligibility comes before entitlement. First establish whether the employee meets the applicable FMLA eligibility requirements.",

    incorrectFeedback:
      "Do not calculate entitlement until you establish that FMLA applies to the employee.",

    mastery: [
      "Eligibility must be established before entitlement is calculated."
    ]
  },

  {
    id: "FMLA-001-Q02",
    caseId: "FMLA-001",
    type: "numeric",
    sequence: 2,

    eyebrow: "PAYROLL RECORD",

    prompt:
      "Which total represents the employee's qualifying hours for the 1,250-hour requirement?",

    calculation: {
      inputs: [
        {
          label: "Regular hours actually worked",
          value: 1180,
          counts: true
        },
        {
          label: "Overtime actually worked",
          value: 74,
          counts: true
        },
        {
          label: "PTO",
          value: 80,
          counts: false
        },
        {
          label: "Sick leave",
          value: 32,
          counts: false
        },
        {
          label: "Holiday not worked",
          value: 16,
          counts: false
        }
      ],

      expectedAnswer: 1254
    },

    correctFeedback:
      "Correct: 1,254 qualifying hours. Regular hours actually worked plus overtime actually worked equal 1,254.",

    incorrectFeedback:
      "Recalculate using hours actually worked. Paid time that was not worked does not become hours actually worked.",

    mastery: [
      "Hours actually worked count toward the federal hours requirement.",
      "Overtime actually worked counts.",
      "PTO, sick leave, and non-worked holidays are not added to hours actually worked."
    ]
  },

  {
    id: "FMLA-001-Q03",
    caseId: "FMLA-001",
    type: "numeric",
    sequence: 3,

    eyebrow: "INTERMITTENT LEAVE",

    prompt:
      "Jordan normally works 32 hours per week. Jordan misses 4 scheduled work hours. What fraction of a workweek is consumed?",

    calculation: {
      numerator: 4,
      denominator: 32,
      operator: "÷",
      expectedAnswer: 0.125,
      tolerance: 0.001
    },

    correctFeedback:
      "Correct: 0.125 workweek. Divide the 4 hours of FMLA leave by Jordan's normal 32-hour workweek.",

    incorrectFeedback:
      "Use the employee's normal workweek as the denominator. 4 ÷ 32 = 0.125.",

    mastery: [
      "FMLA usage for partial-week leave is based on the employee's actual workweek.",
      "The same number of absence hours can consume a different fraction for employees with different workweeks."
    ]
  },

  {
    id: "FMLA-001-Q04",
    caseId: "FMLA-001",
    type: "comparison",
    sequence: 4,

    eyebrow: "COMPARE",

    prompt:
      "How would the same 4-hour absence be calculated for an employee whose normal schedule is 40 hours per week?",

    options: [
      {
        id: "A",
        text: "0.050 workweek",
        correct: false
      },
      {
        id: "B",
        text: "0.100 workweek",
        correct: true
      },
      {
        id: "C",
        text: "0.125 workweek",
        correct: false
      },
      {
        id: "D",
        text: "1.000 workweek",
        correct: false
      }
    ],

    correctFeedback:
      "Correct: 4 ÷ 40 = 0.100 workweek.",

    incorrectFeedback:
      "The denominator changes with the employee's normal workweek. For a 40-hour schedule, 4 ÷ 40 = 0.100.",

    mastery: [
      "Workweek-equivalent calculations depend on the employee's normal schedule."
    ]
  }
];
