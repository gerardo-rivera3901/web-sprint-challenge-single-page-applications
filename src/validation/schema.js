import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("name is required").min(2, "name must be 2+ character"),
  pizzaSize: yup.boolean().oneOf([true], 'pizza size is required'),
});