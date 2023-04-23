// type QuestionType = {
//   question: string;
//   isRequired?: boolean;
//   message?: string;
// };

export const questionList = {
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
    message: `1. Typical angina: 
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Chest pain caused by reduced blood flow to the heart. 
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Described as pressure, tightness, or squeezing in the chest. 
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Triggered by physical activity or emotional stress. 
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Responds to rest or medication.
      <br /><br />
      2. Atypical angina:
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Chest pain similar to typical angina, but may have different characteristics.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;May not be triggered by physical activity or emotional stress.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;May not respond to medication.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Accompanied by symptoms such as shortness of breath, nausea, or fatigue.
      <br /><br />
      3. Non-anginal pain:
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Chest pain not related to the heart.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Caused by problems with muscles, bones, or cartilage in the chest, or conditions such as acid reflux or anxiety.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;May be sharp or dull.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Aggravated by certain movements or positions.
      <br /><br />
      4. Asymptomatic:
      <br />&nbsp;&nbsp;&nbsp;&nbsp;No symptoms of chest pain or discomfort.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;Possible to have heart disease or other conditions that can cause chest pain without experiencing any symptoms.
      <br />&nbsp;&nbsp;&nbsp;&nbsp;May need monitoring or treatment to prevent complications.
    `,
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
    message:
      "Exercise-induced angina: Chest pain that comes on when you're walking uphill or in the cold weather",
  },
  oldpeak: {
    question: "Enter your ST depression induced by exercise relative to rest",
    isRequired: true,
  },
  slope: {
    question: "Slope of the peak exercise",
    isRequired: true,
    message: `
    1. Up-sloping:  This type of ST segment slope indicates a gradual upward slope of the ST segment during exercise. This is considered a normal finding and may indicate that blood flow to the heart muscle is increasing in response to the exercise.
    <br /><br />
    2. Flat:  This type of ST segment slope indicates no significant change in the ST segment during exercise. This may be a normal finding or may indicate that there is no additional blood flow to the heart muscle during exercise.
    <br /><br />
    3. Down-sloping:  This type of ST segment slope indicates a downward slope of the ST segment during exercise. This is considered an abnormal finding and may indicate that there is decreased blood flow to the heart muscle during exercise. This finding may be associated with underlying cardiac issues, such as coronary artery disease.`,
  },
  ca: {
    question: "Number of major vessels (0-3) colored by fluoroscopy",
    isRequired: true,
  },
  thal: {
    question: "Thalassemia",
    isRequired: true,
    message: `
    Thalassemia is a genetic disorder that affects the production of hemoglobin.
    <br /><br />1. No Thalassemia : No thalassemia gene mutation.
    <br /><br />2. Normal Thalassemia: Thalassemia gene mutation present but normal hemoglobin production, no symptoms.
    <br /><br />3. Fixed defect Thalassemia: Permanent reduction in hemoglobin production due to a genetic mutation, requires lifelong management.
    <br /><br />4. Reversible defect Thalassemia: Temporary reduction in hemoglobin production due to factors such as nutritional deficiencies, infections, or certain medications, can be reversed with appropriate treatment.
    `,
  },
} as const;
