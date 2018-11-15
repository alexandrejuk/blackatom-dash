import React from 'react'
import { Input, InputNumber } from 'antd'
import PropTypes from 'prop-types'

const FormInput = ({ label, type, value, onChange }) => ( 
 <div>
    <label>{label}</label>
    {type === 'number' ? <InputNumber value={value} onChange={onChange} /> : <Input type={type} value={value} onChange={onChange}/>}
 </div>
)
 
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FormInput;