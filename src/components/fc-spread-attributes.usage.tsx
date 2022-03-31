import * as React from 'react';

import { FCSpreadAttributes } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <FCSpreadAttributes
    className={'classy'}
    style={{ backgroundColor: 'lightcyan' }}
  >
    {`I'll spread every property you give me!`}
  </FCSpreadAttributes>
);