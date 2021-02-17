import React, { useCallback } from 'react'
import { Form, Field } from 'react-final-form'
import { Box, H3, Flex, Button, TextBox, ELEVATIONS } from '@revolut/ui-kit'
import InputField from 'common/components/FormFields/Input'
import { required } from 'common/components/FormFields/validation'

type Props = {
  onCancel: () => void
  onSubmit: (item: any) => void
}

type SubmitData = {
  name: string
}

export const CreateDictionary: React.FC<Props> = ({ onCancel, onSubmit }) => {
  const onSubmitCallback = useCallback(
    (data: SubmitData) =>
      onSubmit({
        id: Date.now(),
        data: [],
        ...data,
      }),
    [onSubmit],
  )

  return (
    <Box
      bg="white"
      radius="popup"
      elevation={ELEVATIONS.Higher}
      maxWidth={600}
      p={3}
      my={3}
      mx="auto"
    >
      <H3>Create Dictionary</H3>
      <Box mt={2}>
        <Form
          initialValues={{
            name: '',
          }}
          onSubmit={onSubmitCallback}
          render={({ handleSubmit, submitError }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                component={InputField}
                validate={required()}
                placeholder="Name"
              />
              {submitError && (
                <TextBox color="error" mt={2}>
                  Submition Error: {submitError}
                </TextBox>
              )}

              <Flex mt={5}>
                <Button size="sm" width="10rem" variant="accent" mr={2} type="submit">
                  Create
                </Button>
                <Button
                  size="sm"
                  width="10rem"
                  variant="primary"
                  onClick={() => onCancel()}
                >
                  Cancel
                </Button>
              </Flex>
            </form>
          )}
        />
      </Box>
    </Box>
  )
}

export default CreateDictionary
