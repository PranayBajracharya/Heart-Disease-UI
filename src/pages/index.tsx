import CustomeInput from "@/components/Input";
import { questionList } from "@/data/questionList";
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
          <CustomeInput label={questionList.age.question}>
            <NumberInput min={0}>
              <NumberInputField placeholder={questionList.age.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.sex.question}>
            <Select placeholder={questionList.sex.question}>
              <option>Male</option>
              <option>Female</option>
            </Select>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.cp.question}>
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
          <CustomeInput label={questionList.trestbps.question}>
            <NumberInput min={0} max={220}>
              <NumberInputField placeholder={questionList.trestbps.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.chol.question}>
            <NumberInput min={0} max={500}>
              <NumberInputField placeholder={questionList.chol.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.fbs.question}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.restecg.question}>
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
          <CustomeInput label={questionList.thalach.question}>
            <NumberInput min={0} max={500}>
              <NumberInputField placeholder={questionList.chol.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.exang.question}>
            <RadioGroup>
              <Stack spacing={5} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.oldpeak.question}>
            <NumberInput min={0} max={20} step={0.1}>
              <NumberInputField placeholder={questionList.chol.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomeInput>
        </GridItem>

        <GridItem>
          <CustomeInput label={questionList.slope.question}>
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
          <CustomeInput label={questionList.ca.question}>
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
          <CustomeInput label={questionList.thal.question}>
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
