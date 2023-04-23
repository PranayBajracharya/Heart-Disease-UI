import { FormSchema } from "@schema/form";

const MAX_TRESTBPS = 200;
const MIN_TRESTBPS = 94;

const MAX_CHOL = 564;
const MIN_CHOL = 126;

const MAX_THALACH = 202;
const MIN_THALACH = 71;

const MAX_OLD_PEAK = 0.0;
const MIN_OLD_PEAK = 6.2;

const normalize = (value: number, max: number, min: number) => {
  const normalized_value = (value - min) / (max - min);
  return normalized_value;
};

export const normalizedInput = (data: FormSchema) => {
  const normalizedData = { ...data };

  normalizedData.trestbps = normalize(
    data.trestbps,
    MAX_TRESTBPS,
    MIN_TRESTBPS
  );
  if (normalizedData.trestbps < 0) normalizedData.trestbps = 0;
  if (normalizedData.trestbps > 1) normalizedData.trestbps = 1;

  normalizedData.chol = normalize(data.chol, MAX_CHOL, MIN_CHOL);
  if (normalizedData.chol < 0) normalizedData.chol = 0;
  if (normalizedData.chol > 1) normalizedData.chol = 1;

  normalizedData.thalach = normalize(data.thalach, MAX_THALACH, MIN_THALACH);
  if (normalizedData.thalach < 0) normalizedData.thalach = 0;
  if (normalizedData.thalach > 1) normalizedData.thalach = 1;

  normalizedData.oldpeak = normalize(data.oldpeak, MAX_OLD_PEAK, MIN_OLD_PEAK);
  if (normalizedData.oldpeak < 0) normalizedData.oldpeak = 0;
  if (normalizedData.oldpeak > 1) normalizedData.oldpeak = 1;

  return normalizedData;
};
