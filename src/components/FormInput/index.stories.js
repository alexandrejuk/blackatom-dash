import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormInput from '.'

storiesOf('New Form', module)
  .add('new', () => <FormInput label="Name" type="text" />)
