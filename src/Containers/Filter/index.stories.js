import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Filter from '.'

const filters = [
  { property: 'name', type: 'text', label: 'Name', width: "500px" },
  { property: 'age', type: 'number', label: 'Age', width: "200px" },
  { property: 'gender', type: 'text', label: 'Gender', width: "200px" },
]

storiesOf('Filter', module)
  .add('filter default', () => <Filter filters={filters} />)
