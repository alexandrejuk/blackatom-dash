import React from 'react'
import { Card } from 'antd'
import Proptypes from 'prop-types'

import './index.css'
import Form from './Form'

const Login = ({ onSubmit, loading }) => (
  <div className="container">
    <div className="welcome" />
    <div className="formContainer">
      <Card className="card">
        <Form
          onSubmit={onSubmit}
          loading={loading}
        />
      </Card>
    </div>
  </div>
)

Login.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  loading: Proptypes.bool.isRequired,
}

export default Login