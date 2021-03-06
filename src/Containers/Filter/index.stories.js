import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Filter from '.'


storiesOf('Filter', module)
  .add('filter default', () => <Filter
    globalFields={['name']}
    onSearch={action('onSearch')}
    placeholder='nome do produto'
  />)
