import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'
import OrderConfirmation from './components/OrderConfirmation'
import styled from 'styled-components'
import * as yup from 'yup'
import schema from './validation/schema'

const StyledNav = styled.nav`
  background: teal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const initialFormValues = {
  name: '',
  toppings: false,
  pizzaSize: '',
  pepperoni: false,
  ham: false,
  bacon: false,
  sardines: false,
  specialInstructions: ''
}

const initialFormErrors = {
  name: '',
  toppings: '',
  pizzaSize: '',
}

const App = () => {
  const [pizzaBuyers, setPizzaBuyers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  // const inputChange = (name, value) => {
  //   yup.reach(schema, name)
  //     .then(() => {
  //       setFormErrors({...formErrors, [name]: ""})
  //     })
  //     .catch((err) => {
  //       setFormErrors({...formErrors, [name]: err.errors[0]})
  //     })
  //   setFormValues({...formValues, [name]: value})
  // }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])

  const formSubmit = () => {
    const newCustomer = {
      name: formValues.name.trim(),
      specialInstructions: formValues.specialInstructions.trim(),
      pizzaSize: ['Small', 'Medium', 'Large', 'X-Large'].filter(
        (size) => formValues[size]
      ),
      toppings: ['pepperoni', 'ham', 'bacon', 'sardines'].filter(
        (topping) => formValues[topping]
      ),
    }
    // postNewFriend(newFriend);
  }

  return (
    <div>
      <StyledNav>
        <Link to='/' 
          style={{textDecoration: 'none', color: 'white', marginLeft: '4rem',
          fontSize: '1.5rem', fontWeight: 700, padding: '1.5rem'}}>
          Lambda Eats
        </Link>
        <Link to='/pizza' 
          style={{textDecoration: 'none', color: 'white', marginRight: '4rem',
          fontSize: '1.2rem', fontWeight: 600, padding: '1.5rem'}}>
          Order Now
        </Link>
      </StyledNav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <Form 
          values={formValues}
          // change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
        <Route path='/order-confirmation'>
          <OrderConfirmation />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
