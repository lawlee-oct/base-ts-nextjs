import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const SelectFieldStyle = styled(Box)`
  .MuiInputBase-root {
    height: 42px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;

  .MuiTypography-root {
    margin-bottom: 3px;
  }

  &.left {
    display: flex;
    align-items: center;

    .MuiTypography-root {
      margin-right: 15px;
    }
  }

  &.top-right {
    .MuiTypography-root {
      text-align: end;
    }
  }
`;
