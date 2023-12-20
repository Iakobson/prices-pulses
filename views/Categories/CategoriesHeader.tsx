// @/views/Categories/CategoriesHeader.tsx
"use client";
import styles from '@/views/styles/Header.module.css'

import Link from "next/link"
import { usePathname } from "next/navigation";

import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';

// type for each navigation item
type NavLink = {
  label:string;
  href:string;
};
// type for props (input parameters) of the component
type Props = {
  navLinks:NavLink[];
};

const CategoriesHeader = () => {
  // hook to get current path (URL) of the page
  const pathname = usePathname();

  return (
    <>
      <AppBar position='sticky'
        sx={{ backdropFilter: "blur(5px)" }}
      >
        <Toolbar className={styles.toolbarTopMost}>
          <Stack direction='row' spacing={3} marginLeft='30px'>
            <Link href='/categories'>
              <Box className={pathname == '/categories' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                <Typography fontSize='15px' fontWeight='700'>Explore</Typography>
              </Box>
            </Link>
            <Link href='/categories/beverages'>
              <Box className={pathname == '/categories/beverages' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                <Typography fontSize='15px' fontWeight='700'>Напої</Typography>
              </Box>
            </Link>
            <Link href='/categories/seafood'>
              <Box className={pathname == '/categories/seafood' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                <Typography fontSize='15px' fontWeight='700'>Морепродукти</Typography>
              </Box>
            </Link>
            <Link href='/categories/household'>
              <Box className={pathname == '/categories/household' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                <Typography fontSize='15px' fontWeight='700'>Побутові речі</Typography>
              </Box>
            </Link>
          </Stack>
          <Box>
            <Link href='/categories/search'>
              <IconButton>
                <SearchIcon sx={{ color: grey[50], ':hover': { color: '#FFDE00' } }} />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default CategoriesHeader;