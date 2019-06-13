import React from 'react';
import dateFns from 'date-fns';

import { DatePicker, Button, InputGroup } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'DatePicker',
  examples: [
    'basic',
    'one-tap',
    'appearance',
    'block',
    'placeholder',
    'format',
    'format-month',
    'format-time',
    'iso-week',
    'disabled',
    'intl',
    'placement',
    'custom',
    'control',
    'range'
  ],
  dependencies: {
    dateFns,
    Button,
    DatePicker,
    InputGroup
  }
});
