type QuestionType = {
  question: string;
  isRequired?: boolean;
};

export const questionList: Record<string, QuestionType> = {
  age: {
    question: "Enter your age",
    isRequired: true,
  },
  sex: {
    question: "Choose your gender",
    isRequired: true,
  },
  cp: {
    question: "Choose your chest pain",
    isRequired: true,
  },
  trestbps: {
    question: "Enter your resting blood pressure",
    isRequired: true,
  },
  chol: {
    question: "Enter your cholesterol level",
    isRequired: true,
  },
  fbs: {
    question: "Is your fasting blood sugar level higher than 120 mg/dl?",
    isRequired: true,
  },
  restecg: {
    question: "Choose your resting electrocardiogram result",
    isRequired: true,
  },
  thalach: {
    question: "Enter your maximum heart rate achieved during exercise",
    isRequired: true,
  },
  exang: {
    question: "Do you have exercise-induced angina?",
    isRequired: true,
  },
  oldpeak: {
    question: "Enter your ST depression induced by exercise relative to rest",
    isRequired: true,
  },
  slope: {
    question: "Slope of the peak exercise",
    isRequired: true,
  },
  ca: {
    question: "Number of major vessels (0-3) colored by fluoroscopy",
    isRequired: true,
  },
  thal: {
    question: "Thalassemia",
    isRequired: true,
  },
} as const;
