import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Form } from 'react-forms-processor';
import { renderer, FormButton } from 'react-forms-processor-atlaskit';


const fields = [
  {
    id: "NAME"
    , name: "name"
    , type: "text"
    , label: "Name"
    , description: "Enter your name..."
    , placeholder: "Name..."
    , defaultValue: ""
  }
]

class App extends Component {
  
  render() {
    return (
      <Form renderer={renderer} defaultFields={fields}>
        <FormButton />
      </Form>
    );
  }
}

render(<App />, document.getElementById('root'));
