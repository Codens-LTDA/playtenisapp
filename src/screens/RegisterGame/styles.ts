import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLACK_900};
  `}
`;

export const ColumnGroup = styled.View`
  background-color: red;
`;
