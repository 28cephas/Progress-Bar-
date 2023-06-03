const prevBtn = document.querySelectorAll('.btn-prev');
const nextBtn = document.querySelectorAll('.btn-next');
const progress = document.querySelector('.progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;

function updateFormStep() {
  formSteps.forEach(fStep => {
    fStep.classList.contains('form-step-active');
    fStep.classList.remove('form-step-active');
  });

  formSteps[formStepsNum].classList.add('form-step-active');
}

function updatePro() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add('progress-step-active');
    } else {
      progressStep.classList.remove('progress-step-active');
    }
  });

  const proActive = document.querySelectorAll('.progress-step-active');

  progress.style.width =
    ((proActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}

nextBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    formStepsNum++;
    updateFormStep();
    updatePro();
  });
});

prevBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    formStepsNum--;
    updateFormStep();
    updatePro();
  });
});
