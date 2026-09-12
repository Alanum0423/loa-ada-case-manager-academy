document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // ACADEMY STATE
  // ==========================================

  const state = {
    progress: 0,
    currentModuleId: "module-01",
    currentCaseId: "FMLA-001",
    currentQuestionIndex: 0,
    completedCases: [],
    completedLessons: []
  };


  // ==========================================
  // DOM HELPERS
  // ==========================================

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];


  // ==========================================
  // DATA HELPERS
  // ==========================================

  function getModule(moduleId) {
    return ACADEMY_MODULES.find(
      module => module.id === moduleId
    );
  }

  function getCase(caseId) {
    return ACADEMY_CASES.find(
      item => item.id === caseId
    );
  }

  function getQuestion(questionId) {
    return ACADEMY_QUESTIONS.find(
      question => question.id === questionId
    );
  }

  function getLesson(lessonId) {
    return ACADEMY_LESSONS.find(
      lesson => lesson.id === lessonId
    );
  }


  // ==========================================
  // PROGRESS
  // ==========================================

  function setProgress(value) {

    state.progress = Math.max(
      0,
      Math.min(100, value)
    );

    const fill = $("#progressFill");
    const label = $("#progressPercent");

    if (fill) {
      fill.style.width =
        `${state.progress}%`;
    }

    if (label) {
      label.textContent =
        `${state.progress}%`;
    }
  }


  // ==========================================
  // OVERLAY
  // ==========================================

  function closeOverlay() {

    const overlay =
      $("#academyOverlay");

    if (overlay) {
      overlay.remove();
    }
  }


  function createOverlay(
    title,
    eyebrow = "ACADEMY"
  ) {

    closeOverlay();

    const overlay =
      document.createElement("div");

    overlay.id =
      "academyOverlay";

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

    const closeButton =
      $("#closeAcademyOverlay", overlay);

    if (closeButton) {
      closeButton.addEventListener(
        "click",
        closeOverlay
      );
    }

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


  // ==========================================
  // MODULE 01
  // ==========================================

  function launchModuleOne() {

    const module =
      getModule("module-01");

    if (!module) {
      return;
    }

    setProgress(10);

    const overlay =
      createOverlay(
        module.shortTitle,
        "MODULE 01"
      );

    const body =
      $("#academyOverlayBody", overlay);

    body.innerHTML = `

      <div class="module-intro-card">

        <span class="module-tag">
          CASE MANAGER TRAINING
        </span>

        <h3>
          ${module.title}
        </h3>

        <p>
          ${module.description}
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


  // ==========================================
  // FMLA-001 CASE
  // ==========================================

  function showMission() {

    const overlay =
      $("#academyOverlay");

    if (!overlay) {
      return;
    }

    const caseData =
      getCase("FMLA-001");

    if (!caseData) {
      return;
    }

    state.currentCaseId =
      caseData.id;

    state.currentQuestionIndex = 0;

    setProgress(15);

    $(".overlay-header h2", overlay)
      .textContent =
      caseData.id;

    $("#academyOverlayBody", overlay)
      .innerHTML = `

        <div class="case-profile">

          <span class="eyebrow">
            ACTIVE CASE
          </span>

          <h3>
            ${caseData.employee.name}
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

              <
