import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

const FormInput = ({ label, type, value, onChange }) => ( 
 <div>
    <label>{label}</label>
    <Input type={type} value={value} onChange={onChange}/>
 </div>
)
 
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FormInput;