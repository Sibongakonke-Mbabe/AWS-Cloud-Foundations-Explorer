const scenarios = [
  {
    prompt: "A team needs a virtual server with control over its operating system. Which service fits?",
    answer: "ec2",
    explanation: "Amazon EC2 provides on-demand, scalable virtual servers."
  },
  {
    prompt: "A team needs object storage for files, backups, and static assets. Which service fits?",
    answer: "s3",
    explanation: "Amazon S3 stores data as objects inside buckets."
  },
  {
    prompt: "A team needs an isolated virtual network with subnets and routing. Which service fits?",
    answer: "vpc",
    explanation: "Amazon VPC provides a logically isolated virtual network."
  },
    {
    prompt: "An application needs a managed relational database for structured data and SQL. Which service fits?",
    answer: "rds",
    explanation: "Amazon RDS manages common relational database administration tasks."
  },
  {
    prompt: "An application needs a serverless, fully managed NoSQL database. Which service fits?",
    answer: "dynamodb",
    explanation: "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database."
  },
  {
    prompt: "An administrator needs to control authentication and permissions for AWS resources. Which service fits?",
    answer: "iam",
    explanation: "AWS IAM controls authentication and authorization for AWS resources."
  }
];

const scenarioText = document.querySelector("#scenario-text");
const answerGrid = document.querySelector("#answer-grid");
const answerButtons = document.querySelectorAll(".answer-button");
const quizResult = document.querySelector("#quiz-result");
const nextButton = document.querySelector("#next-scenario");
const currentYear = document.querySelector("#current-year");

let currentScenarioIndex = 0;

function showScenario() {
  const scenario = scenarios[currentScenarioIndex];
  scenarioText.textContent = scenario.prompt;
  quizResult.textContent = "Choose one service.";
  nextButton.hidden = true;

  answerButtons.forEach((button) => {
    button.disabled = false;
  });

  function checkAnswer(event) {
  const selectedButton = event.target.closest(".answer-button");

  if (!selectedButton) {
    return;
  }

  const scenario = scenarios[currentScenarioIndex];
  const isCorrect = selectedButton.dataset.service === scenario.answer;
  const prefix = isCorrect ? "Correct." : "Not quite.";

  quizResult.textContent = `${prefix} ${scenario.explanation}`;
  nextButton.hidden = false;

  answerButtons.forEach((button) => {
    button.disabled = true;
  });
}

answerGrid.addEventListener("click", checkAnswer);
}

nextButton.addEventListener("click", () => {
  currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
  showScenario();
});

currentYear.textContent = new Date().getFullYear();
showScenario();