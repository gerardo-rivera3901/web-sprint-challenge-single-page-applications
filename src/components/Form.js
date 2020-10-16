import React from "react";
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledToppings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Form({values, submit, change, disabled, errors}) {
  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <h2>Create Your Pizza</h2>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.toppings}</div>
          <div>{errors.pizzaSize}</div>
        </div>
        <label>Name
          <input 
            name='name'
            type='text'
            value={values.name}
            // onChange={onChange}
          />
        </label>
        <label>Pizza Size
          <select /*onChange={onChange}*/ value={values.role} name='pizzaSize'>
            <option value=''>---Select A Size---</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='X-Large'>X-Large</option>
          </select>
        </label>
        <StyledToppings>
          <h4>Toppings</h4>
          <label>Pepperoni
            <input 
              name='pepperoni'
              type='checkbox'
              checked={values.pepperoni}
              // onChange={onChange}
            />
          </label>
          <label>Ham
            <input 
              name='ham'
              type='checkbox'
              checked={values.ham}
              // onChange={onChange}
            />
          </label>
          <label>Bacon
            <input 
              name='bacon'
              type='checkbox'
              checked={values.bacon}
              // onChange={onChange}
            />
          </label>
          <label>Sardines
            <input 
              name='sardines'
              type='checkbox'
              checked={values.sardines}
              // onChange={onChange}
            />
          </label>
        </StyledToppings><br/ >
        <label>Special Instructions
          <input 
            name='specialInstructions'
            type='text'
            // value={values.specialInstructions}
            // onChange={onChange}
          />
        </label><br />
        <button>Add to Order</button>
      </StyledForm>
    </div>
  )
}