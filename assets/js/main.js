class Configurator {
  step;
  choices;

  constructor() {
    this.step = 0;
    this.choices = this.getChoicesValues();
    this.buttonLeft = document.getElementById("buttonLateralLeft");
    this.buttonRight = document.getElementById("buttonLateralRight");
  }

  getChoicesValues() {
    return {
      space: {},
      colour: {},
      texture: {},
      patterns: {},
      protection: {},
    };
  }

  nextStep() {
    this.step += 1;
    this.render();
  }

  prevStep() {
    this.step -= 1;
    this.render();
  }

  render() {
    this.updateNavByStep(this.step);
    this.renderPageviewByStep(this.step);
    this.renderButtonsByStep(this.step);
    if (this.step === 5) {
      this.renderConfirmation();
    }
    const currentStepName = document
      .querySelectorAll("section")
      [this.step].getAttribute("id");
    if (typeof this.choices[currentStepName].outerHTML === "undefined") {
      this.disableNextButton();
    } else {
      this.enableNextButton();
    }
  }

  renderConfirmation() {
    document.getElementById(
      "choiceResults-space"
    ).innerHTML = `<p class="text-3xl title p-2">Space</p>`;
    document.getElementById(
      "choiceResults-colour"
    ).innerHTML = `<p class="text-3xl title p-2">Colour</p>`;
    document.getElementById(
      "choiceResults-texture"
    ).innerHTML = `<p class="text-3xl title p-2">Texture</p>`;
    document.getElementById(
      "choiceResults-patterns"
    ).innerHTML = `<p class="text-3xl title p-2">Pattern</p>`;
    document.getElementById(
      "choiceResults-protection"
    ).innerHTML = `<p class="text-3xl title p-2">Protection</p>`;
    for (const choice in this.choices) {
      document
        .getElementById(`choiceResults-${[choice]}`)
        .appendChild(this.choices[choice]);
    }
    const elementHovered = document.querySelectorAll(
      "#confirmation .hover\\:border-gray-300"
    );
    elementHovered.forEach((el) => {
      el.classList.remove("hover:border-gray-300", "cursor-pointer");
    });
  }

  attachEvents() {
    const choices = document.querySelectorAll(".choice");
    choices.forEach((el) => {
      el.addEventListener("click", () => {
        const currentStepName = el.closest("section").getAttribute("id");
        const currentChoices = document.querySelectorAll(
          "#" + currentStepName + " .choice"
        );
        currentChoices.forEach((el) => el.classList.remove("selected"));
        const elSelected = el.cloneNode(true);
        this.choices[currentStepName] = elSelected;
        el.classList.add("selected");

        this.enableNextButton();
      });
    });
  }

  renderButtonsByStep(step) {
    this.buttonLeft.classList.add("hidden");
    this.buttonRight.classList.add("hidden");
    if (step < 5) this.buttonRight.classList.remove("hidden");
    if (step > 0) this.buttonLeft.classList.remove("hidden");
    const prevStepText =
      document
        .querySelectorAll(".button-step")
        [step - 1]?.querySelector("strong")
        .innerText.toLocaleLowerCase() || "";
    const nextStepText =
      document
        .querySelectorAll(".button-step")
        [step + 1]?.querySelector("strong")
        .innerText.toLocaleLowerCase() || "";
    this.buttonLeft.querySelector("p").innerText =
      "Choose your " + prevStepText;
    this.buttonRight.querySelector("p").innerText =
      nextStepText === "Confirmation"
        ? nextStepText
        : "Choose your " + nextStepText;
  }
  disableNextButton() {
    this.buttonRight.style.opacity = "0.2";
    this.buttonRight.style.cursor = "not-allowed";
    this.buttonRight.style.pointerEvents = "none";
    this.buttonRight.disabled = true;
  }
  enableNextButton() {
    this.buttonRight.style.opacity = "1";
    this.buttonRight.style.cursor = "pointer";
    this.buttonRight.style.pointerEvents = "inherit";
    this.buttonRight.disabled = false;
  }

  updateNavByStep(stepNumber) {
    this.resetAllNavButtons();
    this.enableButtonByStep(stepNumber);
  }
  resetAllNavButtons() {
    const $buttonSteps = document.querySelectorAll(".button-step");
    $buttonSteps.forEach((el) => {
      el.style.opacity = "0.2";
      el.style.cursor = "not-allowed";
      el.disabled = true;
    });
  }
  enableButtonByStep(stepNumber) {
    for (let i = 0; i <= stepNumber; i++) {
      const currentStep = document.querySelectorAll(".button-step")[i];
      currentStep.style.opacity = "1";
      currentStep.style.cursor = "pointer";
      currentStep.disabled = false;
    }
  }

  renderPageviewByStep(stepNumber) {
    const $step = document.querySelectorAll(".step");
    $step.forEach((el) => (el.style.display = "none"));
    $step[stepNumber].style.display = "block";
  }
}

const configurator = new Configurator();

configurator.render();
configurator.attachEvents();

const $buttonLeft = document.getElementById("buttonLateralLeft");
const $buttonRight = document.getElementById("buttonLateralRight");

$buttonLeft.addEventListener("click", function () {
  if (configurator.step === 0) return;

  configurator.prevStep();
});

$buttonRight.addEventListener("click", function () {
  if (configurator.step === Object.keys(configurator.getChoicesValues()).length)
    return;
  configurator.nextStep();
});
