import CustomInput from "@components/Input";
import Submit from "@components/Submit";
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
} from "@data/constants";
import { questionList } from "@data/questionList";
import { FormErrorKey, formSchema } from "@schema/form";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/layout";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Select } from "@chakra-ui/select";
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState<Map<FormErrorKey, string> | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const data: any = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value ? Number(value) : null;
    }

    const validate = formSchema.safeParse(data);

    if (validate.success) {
      console.log(validate);
      return;
    }

    const error = new Map<FormErrorKey, string>();
    validate.error.errors.forEach((value) => {
      const errorKey = value.path[0] as FormErrorKey;
      error.set(errorKey, value.message);
    });

    setError(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h2" size="lg">
        How healthy is your heart? We will help you figure that out.
      </Heading>

      <Submit />

      <Grid
        rowGap="2rem"
        columnGap="4rem"
        templateColumns={["repeat(1, 1fr)"]}
        w="100%"
        my="2rem"
      >
        <GridItem>
          <CustomInput
            label={questionList.age.question}
            error={error?.get("age")}
            isRequired={questionList.age.isRequired}
          >
            <NumberInput min={MIN_AGE} name="age">
              <NumberInputField placeholder={questionList.age.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.sex.question}
            error={error?.get("sex")}
            isRequired={questionList.sex.isRequired}
          >
            <Select placeholder={questionList.sex.question} name="sex">
              <option value="1">Male</option>
              <option value="0">Female</option>
            </Select>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.cp.question}
            error={error?.get("cp")}
            isRequired={questionList.cp.isRequired}
          >
            <RadioGroup name="cp">
              <Stack spacing={5} direction="row">
                <Radio value="0">Typical angina</Radio>
                <Radio value="1">Atypical angina</Radio>
                <Radio value="2">Non-anginal pain</Radio>
                <Radio value="3">Asymptomatic</Radio>
              </Stack>
            </RadioGroup>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.trestbps.question}
            error={error?.get("trestbps")}
            isRequired={questionList.trestbps.isRequired}
          >
            <NumberInput name="trestbps" min={MIN_BPS} max={MAX_BPS}>
              <NumberInputField placeholder={questionList.trestbps.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.chol.question}
            error={error?.get("chol")}
            isRequired={questionList.chol.isRequired}
          >
            <NumberInput name="chol" min={MIN_CHOLESTRAL} max={MAX_CHOLESTRAL}>
              <NumberInputField placeholder={questionList.chol.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.fbs.question}
            error={error?.get("fbs")}
            isRequired={questionList.fbs.isRequired}
          >
            <RadioGroup name="fbs">
              <Stack spacing={5} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.restecg.question}
            error={error?.get("restecg")}
            isRequired={questionList.restecg.isRequired}
          >
            <RadioGroup name="restecg">
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
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.thalach.question}
            error={error?.get("thalach")}
            isRequired={questionList.thalach.isRequired}
          >
            <NumberInput name="thalach" min={MIN_THALACH} max={MAX_THALACH}>
              <NumberInputField placeholder={questionList.thalach.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.exang.question}
            error={error?.get("exang")}
            isRequired={questionList.exang.isRequired}
          >
            <RadioGroup name="exang">
              <Stack spacing={5} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.oldpeak.question}
            error={error?.get("oldpeak")}
            isRequired={questionList.oldpeak.isRequired}
          >
            <NumberInput
              name="oldpeak"
              min={MIN_OLD_PEAK}
              max={MAX_OLD_PEAK}
              step={0.1}
            >
              <NumberInputField placeholder={questionList.oldpeak.question} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.slope.question}
            error={error?.get("slope")}
            isRequired={questionList.slope.isRequired}
          >
            <RadioGroup name="slope">
              <Stack spacing={5} direction="row">
                <Radio value="0">No problem</Radio>
                <Radio value="1">Normal</Radio>
                <Radio value="2">Worst</Radio>
              </Stack>
            </RadioGroup>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.ca.question}
            error={error?.get("ca")}
            isRequired={questionList.ca.isRequired}
          >
            <RadioGroup name="ca">
              <Stack spacing={5} direction="row">
                <Radio value="0">0</Radio>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
              </Stack>
            </RadioGroup>
          </CustomInput>
        </GridItem>

        <GridItem>
          <CustomInput
            label={questionList.thal.question}
            error={error?.get("thal")}
            isRequired={questionList.thal.isRequired}
          >
            <RadioGroup name="thal">
              <Stack spacing={5} direction="row">
                <Radio value="0">Normal</Radio>
                <Radio value="1">Fixed defect</Radio>
                <Radio value="2">Reversible defect</Radio>
              </Stack>
            </RadioGroup>
          </CustomInput>
        </GridItem>
      </Grid>
    </form>
  );
}
