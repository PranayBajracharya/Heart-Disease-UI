import { z } from "zod";
import {
  MAX_BPS,
  MAX_CHOLESTRAL,
  MAX_OLD_PEAK,
  MAX_THALACH,
  MIN_AGE,
  MIN_BPS,
  MIN_CHOLESTRAL,
  MIN_OLD_PEAK,
  MIN_THALACH,
} from "@/data/constants";

export const FormSchema = z.object({
  age: z.number().min(MIN_AGE),
  sex: z.number().min(0).max(1),
  cp: z.number().min(0).max(3),
  trestbps: z.number().min(MIN_BPS).max(MAX_BPS),
  chol: z.number().min(MIN_CHOLESTRAL).max(MAX_CHOLESTRAL),
  fbs: z.number().min(0).max(1),
  restecg: z.number().min(0).max(2),
  thalach: z.number().min(MIN_THALACH).max(MAX_THALACH),
  exang: z.number().min(0).max(1),
  oldpeak: z.number().min(MIN_OLD_PEAK).max(MAX_OLD_PEAK),
  slope: z.number().min(0).max(2),
  ca: z.number().min(0).max(3),
  thal: z.number().min(0).max(2),
});
