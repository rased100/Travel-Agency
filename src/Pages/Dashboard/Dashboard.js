import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Outlet,
    Link
} from "react-router-dom";
import { Button } from '@mui/material';
import AddBlog from '../AddBlog/AddBlog';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
    const { admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/"><Button color="inherit">Home</Button></Link><br />
            <Link to="/dashboard"><Button color="inherit">Dashboard</Button></Link><br />
            {admin && <Box>
                <Link to="/dashboard/addblog"><Button color="inherit">Add new blog</Button></Link><br />
                <Link to="/dashboard/makeadmin"><Button color="inherit">Make Admin</Button></Link><br />
            </Box>}

            <Box>
                {/* {admin && <Box> */}
                {/* <Link to={`/dashboard/makeAdmin`}><Button color="inherit">Make Admin</Button></Link> */}
                {/* <Link to={`/dashboard/addDoctor`}><Button color="inherit">Add Doctor</Button></Link> */}
                {/* </Box>} */}
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>

            </Box>
        </Box>
    );
}

export default Dashboard;
