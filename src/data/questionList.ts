import { z } from "zod";

type QuestionType = {
  question: string;
  isRequired?: boolean;
};

export const FormSchema = z.object({
  age: z.number().min(1),
  sex: z.number().min(0).max(1),
  cp: z.number().min(0).max(3),
  trestbps: z.number().min(0).max(220),
  chol: z.number().min(0).max(500),
  fbs: z.number().min(0).max(1),
  restecg: z.number().min(0).max(2),
  thalach: z.number().min(0).max(500),
  exang: z.number().min(0).max(1),
  oldpeak: z.number().min(0).max(20),
  slope: z.number().min(0).max(2),
  ca: z.number().min(0).max(3),
  thal: z.number().min(0).max(2),
});

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
