document.addEventListener("DOMContentLoaded", () => {

  const state = {
    progress: 0
  };

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];


  // ================================
  // PROGRESS
  // ================================

  function setProgress(value) {

    state.progress = Math.max(
      0,
      Math.min(100, value)
    );

    const fill = $("#progressFill");
    const label = $("#progressPercent");

    if (fill) {
      fill.style.width = `${state.progress}%`;
    }

    if (label) {
      label.textContent = `${state.progress}%`;
    }
  }


  // ================================
  // OVERLAY
  // ================================

  function closeOverlay() {

    const overlay =
      $("#academyOverlay");

    if (overlay) {
      overlay.remove();
    }
  }


  function createOverlay(title, eyebrow) {

    closeOverlay();

    const overlay =
      document.createElement("div");

    overlay.id = "academyOverlay";
overlay.className =
  "academy-overlay visible";

overlay.style.cssText =
  "position:fixed;" +
  "inset:0;" +
  "z-index:99999;" +
  "display:flex;" +
  "align-items:flex-start;" +
  "justify-content:center;" +
  "padding:20px 14px;" +
  "background:rgba(15,23,42,.78);" +
  "opacity:1;" +
  "visibility:visible;" +
  "pointer-events:auto;" +
  "overflow-y:auto;";
    overlay.innerHTML = `

      <div
        class="academy-modal"
        role="dialog"
        aria-modal="true"
      >

        <div class="overlay-header">

          <div>

            <span class="eyebrow">
              ${eyebrow}
            </span>

            <h2>
              ${title}
            </h2>

          </div>

          <button
            id="closeAcademyOverlay"
            class="icon-button"
            type="button"
            aria-label="Close"
          >
            ×
          </button>

        </div>

        <div id="academyOverlayBody"></div>

      </div>

    `;

    document.body.appendChild(overlay);

    $("#closeAcademyOverlay", overlay)
      .addEventListener(
        "click",
        closeOverlay
      );

    overlay.addEventListener(
      "click",
      event => {

        if (event.target === overlay) {
          closeOverlay();
        }

      }
    );

    return overlay;
  }


  // ================================
  // MODULE 1
  // ================================

  function launchModuleOne() {

    setProgress(10);

    const overlay =
      createOverlay(
        "FMLA Foundations",
        "MODULE 01"
      );

    $("#academyOverlayBody", overlay)
      .innerHTML = `

        <div class="module-intro-card">

          <span class="module-tag">
            CASE MANAGER TRAINING
          </span>

          <h3>
            Your first case is waiting.
          </h3>

          <p>
            Investigate eligibility,
            hours of service,
            workweek mathematics,
            and entitlement logic.
          </p>

        </div>


        <div class="mission-card">

          <div class="mission-number">
            MISSION 01
          </div>

          <h4>
            Determine Eligibility
          </h4>

          <p>
            Establish eligibility before
            calculating available FMLA
            entitlement.
          </p>

        </div>


        <button
          id="beginMission"
          class="primary-action"
          type="button"
        >
          Begin Mission →
        </button>

      `;


    $("#beginMission", overlay)
      .addEventListener(
        "click",
        showMission
      );
  }


  // ================================
  // MISSION 1
  // ================================

  function showMission() {

    const overlay =
      $("#academyOverlay");

    if (!overlay) {
      return;
    }

    setProgress(15);

    $(".overlay-header h2", overlay)
      .textContent = "FMLA-001";

    $("#academyOverlayBody", overlay)
      .innerHTML = `

        <div class="case-profile">

          <span class="eyebrow">
            ACTIVE CASE
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
            What should you establish
            before calculating FMLA
            entitlement?
          </h3>


          <div class="decision-list">

            <button
              class="decision-option"
              data-answer="wrong"
              type="button"
            >
              <span>A</span>
              Remaining FMLA entitlement
            </button>


            <button
              class="decision-option"
              data-answer="correct"
              type="button"
            >
              <span>B</span>
              FMLA eligibility requirements
            </button>


            <button
              class="decision-option"
              data-answer="wrong"
              type="button"
            >
              <span>C</span>
              Whether the employee used PTO
            </button>


            <button
              class="decision-option"
              data-answer="wrong"
              type="button"
            >
              <span>D</span>
              Whether the employee prefers
              intermittent leave
            </button>

          </div>


          <div
            id="decisionFeedback"
            class="decision-feedback"
            aria-live="polite"
          ></div>

        </div>

      `;


    $$(".decision-option", overlay)
      .forEach(option => {

        option.addEventListener(
          "click",
          () => {

            $$(".decision-option", overlay)
              .forEach(button => {

                button.classList.remove(
                  "selected"
                );

              });


            option.classList.add(
              "selected"
            );


            const feedback =
              $("#decisionFeedback", overlay);


            if (
              option.dataset.answer ===
              "correct"
            ) {

              setProgress(20);

              feedback.className =
                "decision-feedback correct";

              feedback.innerHTML = `

                <strong>
                  ✓ Correct.
                </strong>

                <p>
                  Eligibility comes before
                  entitlement. First establish
                  whether the employee meets
                  the applicable FMLA
                  eligibility requirements.
                </p>

                <button
                  id="continueEligibility"
                  class="primary-action"
                  type="button"
                >
                  Continue →
                </button>

              `;


              $(
                "#continueEligibility",
                overlay
              ).addEventListener(
                "click",
                showEligibility
              );

            } else {

              feedback.className =
                "decision-feedback incorrect";

              feedback.innerHTML = `

                <strong>
                  Not yet.
                </strong>

                <p>
                  Do not calculate entitlement
                  until you establish that FMLA
                  applies to the employee.
                </p>

              `;

            }

          }
        );

      });

  }


  // ================================
  // ELIGIBILITY
  // ================================

  function showEligibility() {

    const overlay =
      $("#academyOverlay");

    if (!overlay) {
      return;
    }

    setProgress(25);

    $(".overlay-header h2", overlay)
      .textContent =
      "Eligibility Investigation";


    $("#academyOverlayBody", overlay)
      .innerHTML = `

        <div class="investigation-panel">

          <span class="eyebrow">
            PAYROLL RECORD
          </span>

          <h3>
            Which hours count toward
            the 1,250-hour requirement?
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


          <label for="hoursAnswer">
            Enter qualifying hours:
          </label>


          <div class="calculation-input">

            <input
              id="hoursAnswer"
              type="number"
              inputmode="numeric"
              placeholder="Enter hours"
            >

            <button
              id="submitHours"
              type="button"
            >
              Submit
            </button>

          </div>


          <div
            id="hoursResult"
            class="decision-feedback"
            aria-live="polite"
          ></div>

        </div>

      `;


    $("#submitHours", overlay)
      .addEventListener(
        "click",
        () => {

          const answer =
            Number(
              $("#hoursAnswer", overlay).value
            );

          const result =
            $("#hoursResult", overlay);


          if (answer === 1254) {

            setProgress(35);

            result.className =
              "decision-feedback correct";

            result.innerHTML = `

              <strong>
                ✓ Correct: 1,254 qualifying hours.
              </strong>

              <p>
                1,180 regular hours actually
                worked + 74 overtime hours
                actually worked = 1,254.
              </p>

              <p>
                PTO, sick leave, and the
                non-worked holiday are not
                added to the federal
                hours-worked total.
              </p>

              <button
                id="continueMath"
                class="primary-action"
                type="button"
              >
                Continue to Workweek Math →
              </button>

            `;


            $("#continueMath", overlay)
              .addEventListener(
                "click",
                showMath
              );

          } else {

            result.className =
              "decision-feedback incorrect";

            result.innerHTML = `

              <strong>
                ✕ Recalculate.
              </strong>

              <p>
                Count hours actually worked.
                Paid time that was not worked
                does not become hours actually
                worked.
              </p>

            `;

          }

        }
      );

  }


  // ================================
  // WORKWEEK MATH
  // ================================

  function showMath() {

    const overlay =
      $("#academyOverlay");

    if (!overlay) {
      return;
    }

    setProgress(45);

    $(".overlay-header h2", overlay)
      .textContent =
      "Workweek Mathematics";


    $("#academyOverlayBody", overlay)
      .innerHTML = `

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
            How much of a workweek
            is consumed?
          </h3>


          <div class="formula">

            <span>
              4
            </span>

            <span>
              ÷
            </span>

            <span>
              32
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
              id="submitFraction"
              type="button"
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

      `;


    $("#submitFraction", overlay)
      .addEventListener(
        "click",
        () => {

          const answer =
            Number(
              $("#fractionAnswer", overlay).value
            );

          const result =
            $("#fractionResult", overlay);


          if (
            Math.abs(
              answer - 0.125
            ) < 0.001
          ) {

            setProgress(100);

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
                an employee whose normal
                schedule is 40 hours.
              </p>

              <button
                id="completeMission"
                class="primary-action"
                type="button"
              >
                Complete Mission →
              </button>

            `;


            $("#completeMission", overlay)
              .addEventListener(
                "click",
                () => {

                  $(
                    "#academyOverlayBody",
                    overlay
                  ).innerHTML = `

                    <div
                      class="completion-screen"
                    >

                      <span class="eyebrow">
                        MISSION COMPLETE
                      </span>

                      <h3>
                        FMLA-001 cleared.
                      </h3>

                      <p>
                        You established eligibility,
                        calculated qualifying hours,
                        and applied workweek-based
                        leave mathematics.
                      </p>

                      <button
                        id="returnHome"
                        class="primary-action"
                        type="button"
                      >
                        Return to Academy
                      </button>

                    </div>

                  `;


                  $("#returnHome", overlay)
                    .addEventListener(
                      "click",
                      closeOverlay
                    );

                }
              );

          } else {

            result.className =
              "decision-feedback incorrect";

            result.innerHTML = `

              <strong>
                ✕ Not quite.
              </strong>

              <p>
                Divide the hours of leave
                by the employee's normal
                workweek: 4 ÷ 32.
              </p>

            `;

          }

        }
      );

  }


  // ================================
  // CASE LAB
  // ================================

  function openCases() {

    const overlay =
      createOverlay(
        "Case Queue",
        "CASE LAB"
      );


    $("#academyOverlayBody", overlay)
      .innerHTML = `

        <div class="mission-card">

          <div class="mission-number">
            AVAILABLE CASE
          </div>

          <h4>
            FMLA-001 · Jordan Miller
          </h4>

          <p>
            Eligibility, hours-of-service
            investigation, and workweek
            mathematics.
          </p>

          <button
            id="openCase"
            class="primary-action"
            type="button"
          >
            Open Case →
          </button>

        </div>

      `;


    $("#openCase", overlay)
      .addEventListener(
        "click",
        showMission
      );

  }


  // ================================
  // TOOLS
  // ================================

  function openTools() {

    const overlay =
      createOverlay(
        "Training Tools",
        "TOOLS"
      );


    $("#academyOverlayBody", overlay)
      .innerHTML = `

        <div class="module-intro-card">

          <h3>
            Case Manager Toolkit
          </h3>

          <p>
            Eligibility, entitlement,
            rolling-calendar,
            intermittent-leave, and
            workweek calculators will
            live here.
          </p>

        </div>


        <div class="empty-state-card">

          <strong>
            Tool library in build.
          </strong>

          <p>
            This area is reserved for
            the production calculator suite.
          </p>

        </div>

      `;

  }


  // ================================
  // PROGRESS
  // ================================

  function openProgress() {

    const overlay =
      createOverlay(
        "Training Progress",
        "ACADEMY"
      );


    $("#academyOverlayBody", overlay)
      .innerHTML = `

        <div class="math-card">

          <span class="eyebrow">
            CURRENT COMPLETION
          </span>

          <div class="big-number">
            ${state.progress}%
          </div>

          <p>
            Module 01 · FMLA Foundations
          </p>

        </div>

      `;

  }


  // ================================
  // START BUTTON
  // ================================

  const startButton =
    $("#startButton");


  if (startButton) {

    startButton.addEventListener(
      "click",
      () => {

        startButton.textContent =
          "Continue Training";

        setProgress(5);

        launchModuleOne();

      }
    );

  }


  // ================================
  // MODULE BUTTON
  // ================================

  $$(".module-button")
    .forEach(button => {

      button.addEventListener(
        "click",
        launchModuleOne
      );

    });


  // ================================
  // BOTTOM NAV
  // ================================

  $$(".nav-item")
    .forEach((item, index) => {

      item.addEventListener(
        "click",
        () => {

          $$(".nav-item")
            .forEach(nav => {

              nav.classList.remove(
                "active"
              );

            });


          item.classList.add("active");


          if (index === 0) {
            closeOverlay();
          }

          if (index === 1) {
            openCases();
          }

          if (index === 2) {
            openTools();
          }

          if (index === 3) {
            openProgress();
          }

        }
      );

    });


  // ================================
  // INITIALIZE
  // ================================

  setProgress(0);

});
