class Configurator {
  step;
  choices;

  constructor() {
    this.step = 0;
    this.choices = this.getChoicesValues();
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
