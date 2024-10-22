import NightModeToggle from '@/widgets/ModeSwitcher/ModeSwitcher';
import { Box, Button } from '@mui/material';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const Sidebar = ({ className }: Props) => {
  return (
    <Box
      data-testid="sidebar"
      className={classNames(className)}
      sx={{ height: '100%', width: '100px' }}>
      <NightModeToggle />
      {/* <Button data-testid="button">BUTTON!</Button> */}
    </Box>
  );
};
