import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form'

storiesOf('Product', module)
  .add('Form default', () => <Form  submit={action('create new product')}/>)
  .add('Form with values', () => <Form
    submit={action('create new product')}
    initialValue={{
      name: 'Relogio H123',
      brand: 'Real Ponto',
      category: 'relogio',
      sku: '321312',
      hasSerialNumber: true,
      priceSell: 1200,
      priceBuy: 2121,
    }}
  />)
