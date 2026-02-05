'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { ubuntu } from "@/app/components/utils/fonts"
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: ubuntu.style.fontFamily,
    },
});
export default function ThemeRegistry({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}

