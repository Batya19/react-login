import { Outlet } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useUserContext } from '../../context/UserContext';
import AppHeader from './AppHeader';

const AppLayout = () => {
    const { state: { isAuthenticated }, dispatch } = useUserContext();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT", payload: null });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppHeader
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
            />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: 'background.default'
                }}>
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </Box>

            <Box
                component="footer"
                sx={{
                    py: 2,
                    px: 3,
                    mt: 'auto',
                    backgroundColor: 'background.paper',
                    textAlign: 'center'
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    Copyright {new Date().getFullYear()} © All Rights Reserved. Created by Batya Zilberberg
                </Typography>
            </Box>
        </Box >
    );
};

export default AppLayout;