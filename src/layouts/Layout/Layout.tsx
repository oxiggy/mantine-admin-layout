import React, { memo } from 'react';
import { useMantineTheme, Modal, Drawer, Button, Box, Text, Title } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

const NavContent = () => {
  return (
    <Text>Nav</Text>
  )
}

const OptionsContent = ({ onClick }: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {
  return (
    <Box>
      <Title>Options</Title>
      {!!onClick && (<Button variant='light' onClick={onClick}>open modal</Button>)}
    </Box>
  )
}

const AsideContent = () => {
  return (
    <Box miw={400}>
      <Title>Aside</Title>
    </Box>
  )
}

const MainContent = ({ onClick }: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {
  return (
    <Box>
      <Title>Content</Title>
      {!!onClick && (<Button variant='light' onClick={onClick}>open drawer</Button>)}
    </Box>
  )
}

const Layout = () => {
  const theme = useMantineTheme();
  const tabletScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  //const laptopScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  //const desktopScreen = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
  const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);

  const [openedDrawer, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);

  return (
    <Box sx={{
      height: 'inherit',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: tabletScreen ? '60px 300px 1fr auto' :  '60px 1fr',
    }}>
      <Box bg='gray.5'>
        <NavContent />
      </Box>
      <Box bg='gray.3'>
        <OptionsContent onClick={!tabletScreen ? openModal : undefined}/>
      </Box>
      {tabletScreen ? (
        <Box bg='gray.1'>
          <MainContent onClick={!largeScreen ? openDrawer : undefined} />
        </Box>
      ) : (
        <Modal fullScreen opened={openedModal} onClose={closeModal}>
          <MainContent onClick={openDrawer} />
        </Modal>
      )}
      {largeScreen ? (
        <Box
          sx={(theme) => ({
            borderLeft: '1px solid',
            borderColor: theme.colors.gray[3],
          })}
        >
          <AsideContent />
        </Box>
      ) : (
        <Drawer opened={openedDrawer} onClose={closeDrawer}>
          <AsideContent />
        </Drawer>
      )}
    </Box>
  )
}

export default memo(Layout);