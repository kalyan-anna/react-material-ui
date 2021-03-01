import { Grid, styled } from '@material-ui/core';
import { compose, palette, sizing } from '@material-ui/system';

import { brown } from '@material-ui/core/colors';

const GridContainer = styled(Grid)(compose(sizing, palette));

GridContainer.defaultProps = {
  container: true,
  direction: 'column',
  justify: 'flex-start',
  alignItems: 'stretch',
  height: '100%',
  bgcolor: brown[500],
};

export { GridContainer };