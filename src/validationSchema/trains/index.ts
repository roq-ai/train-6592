import * as yup from 'yup';

export const trainValidationSchema = yup.object().shape({
  name: yup.string().required(),
  details: yup.string().required(),
  organization_id: yup.string().nullable(),
});
