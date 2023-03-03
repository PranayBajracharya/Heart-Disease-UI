import CustomeInput from "@/components/Input";
import {
  Grid,
  GridItem,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Heading as="h2" size="lg">
        How healthy is your heart? We will help you figure that out.
      </Heading>
      <Grid
        rowGap="2rem"
        columnGap="4rem"
        templateColumns={["repeat(1, 1fr)"]}
        w="100%"
        my="2rem"
      >
        <GridItem>
          <CustomeInput label={questions.age}>
            <NumberInput min={0}>
              <NumberInputField placeholder={questions.age} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>
        <GridItem>
          <CustomeInput label={questions.sex}>
            <Select placeholder={questions.sex}>
              <option>Male</option>
              <option>Female</option>
            </Select>
          </CustomeInput>
        </GridItem>
        <GridItem>
          <CustomeInput label={questions.cp}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="0">Typical angina</Radio>
                <Radio value="1">Atypical angina</Radio>
                <Radio value="2">Non-anginal pain</Radio>
                <Radio value="3">Asymptomatic</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>
        <GridItem>
          <CustomeInput label={questions.trestbps}>
            <NumberInput min={0} max={220}>
              <NumberInputField placeholder={questions.trestbps} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>
        <GridItem>
          <CustomeInput label={questions.chol}>
            <NumberInput min={0} max={500}>
              <NumberInputField placeholder={questions.chol} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>
        <GridItem>
          <CustomeInput label={questions.fbs}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>
        <GridItem>
          <CustomeInput label={questions.restecg}>
            <RadioGroup>
              <Stack spacing={2} direction="column">
                <Radio value="0">Normal</Radio>
                <Radio value="1">
                  Abnormality in the T wave and ST segment
                </Radio>
                <Radio value="2">
                  Showing probable or definite left ventricular hypertrophy by
                  Estes' criteria
                </Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>
        <GridItem>
          <CustomeInput label={questions.thalach}>
            <NumberInput min={0} max={500}>
              <NumberInputField placeholder={questions.chol} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questions.exang}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questions.oldpeak}>
            <NumberInput min={0} max={20} step={0.1}>
              <NumberInputField placeholder={questions.chol} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questions.slope}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="0">No problem</Radio>
                <Radio value="1">Normal</Radio>
                <Radio value="2">Worst</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questions.ca}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="0">0</Radio>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questions.thal}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="0">Normal</Radio>
                <Radio value="1">Fixed defect</Radio>
                <Radio value="2">Reversible defect</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>
      </Grid>
    </main>
  );
}

const questions = {
  age: "Enter your age",
  sex: "Choose your gender",
  cp: "Choose your chest pain",
  trestbps: "Enter your resting blood pressure",
  chol: "Enter your cholesterol level",
  fbs: "Is your fasting blood sugar level higher than 120 mg/dl?",
  restecg: "Choose your resting electrocardiogram result",
  thalach: "Enter your maximum heart rate achieved during exercise",
  exang: "Do you have exercise-induced angina?",
  oldpeak: "Enter your ST depression induced by exercise relative to rest",
  slope: "Slope of the peak exercise",
  ca: "Number of major vessels (0-3) colored by fluoroscopy",
  thal: "Thalassemia",
} as const;
