import styled from 'styled-components';

import { TOOLBAR_HEIGHT } from '~/renderer/app/constants/design';

export const StyledToolbar = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-flow: row;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: ${TOOLBAR_HEIGHT}px;
  -webkit-app-region: drag;
`;
