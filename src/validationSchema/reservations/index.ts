import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_time: yup.date().required(),
  guest_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
