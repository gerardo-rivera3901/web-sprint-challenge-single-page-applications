import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("name is required").min(2, "name must be 2+ character"),
  pizzaSize: yup.string().oneOf(['Small', 'Medium', 'Large', 'X-Large'], 'pizza size is required'),
  Pepperoni: yup.boolean(),
  Ham: yup.boolean(),
  Bacon: yup.boolean(),
  Sardines: yup.boolean(),
  specialInstructions: yup.string()
})