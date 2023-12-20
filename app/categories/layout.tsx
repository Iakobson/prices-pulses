// @/app/categories/layout.tsx

import Link from 'next/link';

// MUI components
import Box from '@mui/material/Box';
import CategoryIcon from '@mui/icons-material/Category';
// views (design) elements
import CategoriesHeader from '@/views/Categories/CategoriesHeader';



const MenuPages = [
  { label: 'Напої', href: '/categories/beverages', icon: <CategoryIcon /> },
  { label: 'Морепродукти', href: '/categories/seafood', icon: <CategoryIcon /> },
  { label: 'Побутові речі', href: '/categories/household', icon: <CategoryIcon /> },
];




export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <Box>
	  <CategoriesHeader />
      <section>
        <h1>Категорії товарів.</h1>
        {/*  */}
        {children}
      </section>
	</Box>
  );
}
