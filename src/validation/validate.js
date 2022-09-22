import * as yup from "yup";

const schema = yup.object().shape({
  model: yup.string().required(),
  year: yup.number().required(),
  price: yup.number().required(),
});
export default schema