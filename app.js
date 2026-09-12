// ============================================
// LOA & ADA CASE MANAGER ACADEMY
// Application Controller
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  // --------------------------------------------
  // Application State
  // --------------------------------------------

  const state = {
    started: false,
    progress: 0,
    currentModule: 1
  };


  // --------------------------------------------
  // Elements
  // --------------------------------------------

  const startButton = document.getElementById("startButton");
  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");


  // --------------------------------------------
  // Progress
  // --------------------------------------------

  function updateProgress(value) {

    state.progress = Math.max(0, Math.min(100, value));

    if (progressFill) {
      progressFill.style.width = `${state.progress}%`;
    }

    if (progressPercent) {
      progressPercent.textContent = `${state.progress}%`;
    }
  }


  // --------------------------------------------
  // Start Training
  // --------------------------------------------

  if (startButton) {

    startButton.addEventListener("click", () => {

      state.started = true;

      updateProgress(5);

      startButton.textContent = "Continue Training";

      const firstModule =
        document.querySelector(".module-card.active");

      if (firstModule) {

        firstModule.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }

    });

  }


  // --------------------------------------------
  // Module Navigation
  // --------------------------------------------

  const moduleButton =
    document.querySelector(".module-button");

  if (moduleButton) {

    moduleButton.addEventListener("click", () => {

      state.currentModule = 1;

      updateProgress(10);

      openModuleOne();

    });

  }


  // --------------------------------------------
  // Module 1 Launcher
  // --------------------------------------------

  function openModuleOne() {

    const existing =
      document.getElementById("moduleOneOverlay");

    if (existing) {
      existing.remove();
    }


    const overlay =
      document.createElement("div");

    overlay.id = "moduleOneOverlay";

    overlay.innerHTML = `

      <div class="module-overlay">

        <div class="module-overlay-header">

          <div>

            <span class="eyebrow">
              MODULE 01
            </span>

            <h2>
              FMLA Foundations
            </h2>

          </div>

          <button
            type="button"
            id="closeModule"
            class="close-module"
            aria-label="Close module"
          >
            ×
          </button>

        </div>


        <div class="module-intro">

          <span class="module-tag">
            CASE MANAGER TRAINING
          </span>

          <h3>
            Your first case is waiting.
          </h3>

          <p>
            You will investigate an employee's
            FMLA eligibility, work schedule,
            prior leave usage, and entitlement.
          </p>

          <div class="mission-card">

            <div class="mission-number">
              MISSION 01
            </div>

            <h4>
              Determine Eligibility
            </h4>

            <p>
              Before calculating entitlement,
              determine whether the employee
              satisfies the applicable FMLA
              eligibility requirements.
            </p>

          </div>


          <button
            type="button"
            id="beginMission"
            class="mission-button"
          >
            Begin Mission →
          </button>

        </div>

      </div>

    `;


    document.body.appendChild(overlay);


    const closeButton =
      document.getElementById("closeModule");

    if (closeButton) {

      closeButton.addEventListener("click", () => {
        overlay.remove();
      });

    }


    const beginMission =
      document.getElementById("beginMission");

    if (beginMission) {

      beginMission.addEventListener("click", () => {

        updateProgress(15);

        showMissionOne();

      });

    }

  }


  // --------------------------------------------
  // Mission 1
  // --------------------------------------------

  function showMissionOne() {

    const overlay =
      document.getElementById("moduleOneOverlay");

    if (!overlay) {
      return;
    }


    overlay.innerHTML = `

      <div class="module-overlay">

        <div class="case-header">

          <div>

            <span class="eyebrow">
              ACTIVE CASE
            </span>

            <h2>
              FMLA-001
            </h2>

          </div>

          <div class="case-status">
            INVESTIGATION
          </div>

        </div>


        <div class="case-profile">

          <span class="eyebrow">
            EMPLOYEE
          </span>

          <h3>
            Jordan Miller
          </h3>

          <div class="case-details">

            <div>
              <span>
                Leave Start
              </span>

              <strong>
                September 21, 2026
              </strong>
            </div>

            <div>
              <span>
                Normal Schedule
              </span>

              <strong>
                32 hours/week
              </strong>
            </div>

            <div>
              <span>
                Service
              </span>

              <strong>
                2 years
              </strong>
            </div>

          </div>

        </div>


        <div class="investigation-panel">

          <span class="eyebrow">
            FIRST DECISION
          </span>

          <h3>
            What should you establish before
            calculating FMLA entitlement?
          </h3>


          <div class="decision-list">

            <button
              type="button"
              class="decision-option"
              data-answer="wrong"
            >
              <span>A</span>
              Remaining FMLA entitlement
            </button>


            <button
              type="button"
              class="decision-option"
              data-answer="correct"
            >
              <span>B</span>
              FMLA eligibility requirements
            </button>


            <button
              type="button"
              class="decision-option"
              data-answer="wrong"
            >
              <span>C</span>
              Whether the employee used PTO
            </button>


            <button
              type="button"
              class="decision-option"
              data-answer="wrong"
            >
              <span>D</span>
              Whether the employee prefers intermittent leave
            </button>

          </div>


          <div
            id="decisionFeedback"
            class="decision-feedback"
            aria-live="polite"
          ></div>

        </div>


        <div class="case-footer">

          <span>
            CASE 1 OF 1
          </span>

          <span>
            MODULE PROGRESS: 15%
          </span>

        </div>

      </div>

    `;


    const options =
      overlay.querySelectorAll(".decision-option");


    options.forEach(option => {

      option.addEventListener("click", () => {

        options.forEach(item => {
          item.classList.remove("selected");
        });


        option.classList.add("selected");


        const feedback =
          document.getElementById("decisionFeedback");


        if (option.dataset.answer === "correct") {

          feedback.className =
            "decision-feedback correct";

          feedback.innerHTML = `
            <strong>✓ Correct decision.</strong>

            <p>
              Establish eligibility before
              calculating available entitlement.
              Eligibility and entitlement are
              separate determinations.
            </p>

            <button
              type="button"
              id="continueMission"
              class="continue-button"
            >
              Continue →
            </button>
          `;


          updateProgress(20);


          const continueButton =
            document.getElementById("continueMission");


          continueButton.addEventListener("click", () => {

            showEligibilityInvestigation();

          });

        } else {

          feedback.className =
            "decision-feedback incorrect";

          feedback.innerHTML = `
            <strong>⚠ Not yet.</strong>

            <p>
              You attempted to determine
              entitlement before establishing
              whether FMLA applies.
              Reassess the order of operations.
            </p>
          `;

        }

      });

    });

  }


  // --------------------------------------------
  // Eligibility Investigation
  // --------------------------------------------

  function showEligibilityInvestigation() {

    const overlay =
      document.getElementById("moduleOneOverlay");

    if (!overlay) {
      return;
    }


    overlay.innerHTML = `

      <div class="module-overlay">

        <div class="case-header">

          <div>

            <span class="eyebrow">
              CASE FMLA-001
            </span>

            <h2>
              Eligibility Investigation
            </h2>

          </div>

          <div class="case-status">
            STEP 02
          </div>

        </div>


        <div class="investigation-panel">

          <span class="eyebrow">
            PAYROLL RECORD
          </span>

          <h3>
            Which hours count toward the
            1,250-hour requirement?
          </h3>


          <div class="payroll-grid">

            <div class="payroll-row">

              <span>
                Regular hours actually worked
              </span>

              <strong>
                1,180
              </strong>

            </div>


            <div class="payroll-row">

              <span>
                Overtime actually worked
              </span>

              <strong>
                74
              </strong>

            </div>


            <div class="payroll-row">

              <span>
                PTO
              </span>

              <strong>
                80
              </strong>

            </div>


            <div class="payroll-row">

              <span>
                Sick leave
              </span>

              <strong>
                32
              </strong>

            </div>


            <div class="payroll-row">

              <span>
                Holiday not worked
              </span>

              <strong>
                16
              </strong>

            </div>

          </div>


          <div class="calculation-question">

            <label for="hoursAnswer">

              Enter qualifying hours:

            </label>

            <div class="calculation-input">

              <input
                id="hoursAnswer"
                type="number"
                inputmode="numeric"
                min="0"
                placeholder="Enter hours"
              >

              <button
                type="button"
                id="submitHours"
              >
                Submit
              </button>

            </div>

          </div>


          <div
            id="hoursResult"
            class="decision-feedback"
            aria-live="polite"
          ></div>

        </div>

      </div>

    `;


    const submit =
      document.getElementById("submitHours");


    submit.addEventListener("click", () => {

      const input =
        document.getElementById("hoursAnswer");


      const answer =
        Number(input.value);


      const result =
        document.getElementById("hoursResult");


      if (answer === 1254) {

        result.className =
          "decision-feedback correct";

        result.innerHTML = `

          <strong>
            ✓ Correct: 1,254 qualifying hours.
          </strong>

          <p>
            1,180 actual hours worked
            + 74 overtime hours actually worked
            = 1,254 qualifying hours.
          </p>

          <p>
            PTO, sick leave, and the
            non-worked holiday are not
            added to this eligibility total.
          </p>

          <button
            type="button"
            id="continueToMath"
            class="continue-button"
          >
            Continue to Workweek Math →
          </button>

        `;


        updateProgress(30);


        document
          .getElementById("continueToMath")
          .addEventListener("click", () => {

            showWorkweekMath();

          });


      } else {

        result.className =
          "decision-feedback incorrect";

        result.innerHTML = `

          <strong>
            ✕ Incorrect calculation.
          </strong>

          <p>
            Separate hours actually worked
            from paid time that was not worked.
          </p>

          <p>
            Recalculate the qualifying hours
            using only the applicable
            hours-of-service rules.
          </p>

        `;

      }

    });

  }


  // --------------------------------------------
  // Workweek Mathematics
  // --------------------------------------------

  function showWorkweekMath() {

    const overlay =
      document.getElementById("moduleOneOverlay");

    overlay.innerHTML = `

      <div class="module-overlay">

        <div class="case-header">

          <div>

            <span class="eyebrow">
              CASE FMLA-001
            </span>

            <h2>
              Workweek Mathematics
            </h2>

          </div>

          <div class="case-status">
            STEP 03
          </div>

        </div>


        <div class="math-card">

          <span class="eyebrow">
            EMPLOYEE SCHEDULE
          </span>

          <div class="big-number">
            32
          </div>

          <p>
            hours per week
          </p>

        </div>


        <div class="investigation-panel">

          <span class="eyebrow">
            INTERMITTENT LEAVE
          </span>

          <h3>
            Jordan misses 4 hours.
            How much of a workweek is consumed?
          </h3>


          <div class="formula">

            <span>
              4 hours
            </span>

            <span>
              ÷
            </span>

            <span>
              32 hours
            </span>

            <span>
              =
            </span>

            <strong>
              ?
            </strong>

          </div>


          <div class="calculation-input">

            <input
              id="fractionAnswer"
              type="number"
              inputmode="decimal"
              step="0.001"
              placeholder="0.000"
            >

            <button
              type="button"
              id="submitFraction"
            >
              Submit
            </button>

          </div>


          <div
            id="fractionResult"
            class="decision-feedback"
            aria-live="polite"
          ></div>

        </div>

      </div>

    `;


    document
      .getElementById("submitFraction")
      .addEventListener("click", () => {

        const answer =
          Number(
            document.getElementById("fractionAnswer").value
          );


        const result =
          document.getElementById("fractionResult");


        if (Math.abs(answer - 0.125) < 0.001) {

          result.className =
            "decision-feedback correct";

          result.innerHTML = `

            <strong>
              ✓ Correct: 0.125 workweek.
            </strong>

            <p>
              4 ÷ 32 = 0.125.
            </p>

            <p>
              The same 4-hour absence would
              equal 0.100 of a workweek for
              an employee whose normal schedule
              is 40 hours.
            </p>

            <button
              type="button"
              id="finishMission"
              class="continue-button"
            >
              Complete Mission →
            </button>

          `;


          updateProgress(40);


          document
            .getElementById("finishMission")
            .addEventListener("click", () => {

              finishMission();

            });


        } else {

          result.className =
            "decision-feedback incorrect";

          result.innerHTML = `

            <strong>
              ✕ Check your denominator.
            </strong>

            <p>
              The employee works 32 hours
              per week.
            </p>

            <p>
              4 ÷ 32 = 0.125.
            </p>

          `;

        }

      });

  }


  // --------------------------------------------
  // Mission Complete
  // --------------------------------------------

  function finishMission() {

    const overlay =
      document.getElementById("moduleOneOverlay");


    overlay.innerHTML = `

      <div class="module-overlay completion-screen">

        <div class="completion-icon">
          ✓
        </div>


        <span class="eyebrow">
          MISSION COMPLETE
        </span>


        <h2>
          FMLA-001
        </h2>


        <p>
          You successfully completed the
          first case-management investigation.
        </p>


        <div class="completion-stats">

          <div>

            <strong>
              40%
            </strong>

            <span>
              Module Progress
            </span>

          </div>


          <div>

            <strong>
              3
            </strong>

            <span>
              Decisions Completed
            </span>

          </div>


          <div>

            <strong>
              1
            </strong>

            <span>
              Case Completed
            </span>

          </div>

        </div>


        <button
          type="button"
          id="closeCompletedModule"
          class="mission-button"
        >
          Return to Academy
        </button>

      </div>

    `;


    updateProgress(40);


    document
      .getElementById("closeCompletedModule")
      .addEventListener("click", () => {

        overlay.remove();

      });

  }


  // --------------------------------------------
  // Initialize
  // --------------------------------------------

  updateProgress(0);

});
