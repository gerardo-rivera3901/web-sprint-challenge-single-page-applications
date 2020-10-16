import React from "react";
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledErrors = styled.div`
  margin: 1%;
  font-size: 1rem;
  color: red;
  text-align: center;
`

export default function Form({values, submit, change, disabled, errors, clients}) {
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
        <h2 style={{marginTop: '2%', marginBottom: '0'}}>Create Your Pizza</h2>
        <StyledErrors>
          <div>{errors.name}</div>
          <div>{errors.toppings}</div>
          <div>{errors.pizzaSize}</div>
        </StyledErrors>
        <label>Name
          <input 
            name='name'
            type='text'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>Pizza Size
          <select onChange={onChange} value={values.pizzaSize} name='pizzaSize'>
            <option value=''>---Select A Size---</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='X-Large'>X-Large</option>
          </select>
        </label>
        <StyledDiv>
          <h4 style={{marginTop: '15%', marginBottom: '15%'}}>Toppings</h4>
          <label>Pepperoni
            <input 
              name='Pepperoni'
              type='checkbox'
              checked={values.Pepperoni}
              onChange={onChange}
            />
          </label>
          <label>Ham
            <input 
              name='Ham'
              type='checkbox'
              checked={values.Ham}
              onChange={onChange}
            />
          </label>
          <label>Bacon
            <input 
              name='Bacon'
              type='checkbox'
              checked={values.Bacon}
              onChange={onChange}
            />
          </label>
          <label>Sardines
            <input 
              name='Sardines'
              type='checkbox'
              checked={values.Sardines}
              onChange={onChange}
            />
          </label>
        </StyledDiv><br />
        <label>Special Instructions
          <input 
            name='specialInstructions'
            type='text'
            value={values.specialInstructions}
            onChange={onChange}
          />
        </label><br />
        <button disabled={disabled}>Add to Order</button>
      </StyledForm>
      <StyledDiv>
        <h2>Your Orders:</h2>
      </StyledDiv>
      {clients.map((client) => {
        return (
          <StyledDiv key={client.id}>
            <div style={{borderTop: '1px solid black', width: '30rem', margin: '3%'}}></div>
            <h2 style={{margin: '1%'}}>{client.name}</h2>
            <h4 style={{margin: '1%'}}>Pizza Size: {client.pizzaSize}</h4>
            <h4 style={{margin: '1%'}}>Toppings: {client.toppings[0]} {client.toppings[1]} {client.toppings[2]} {client.toppings[3]}</h4>
            <h4 style={{margin: '1%'}}>Special Instructions: {client.specialInstructions}</h4>
          </StyledDiv>
        )}
      )}
    </div>
  )
}