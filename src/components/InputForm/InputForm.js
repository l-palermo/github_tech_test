import React from 'react';

function InputForm(props) {

  return(
    <form >
      <label>
        Name:
        <input id='user-name' type='text' placeholder='Insert user name' />
        <input id='submit-name' type='submit' value='Submit' />
      </label>
    </form>
  )
}

export default InputForm;
