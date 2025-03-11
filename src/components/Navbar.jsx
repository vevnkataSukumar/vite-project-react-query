import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navItems = [{
    id: 1,
    label: 'Home',
    path: '/'
},
{
    id: 2,
    label: 'About',
    path: '/about'
},
{
    id: 3,
    label: 'Contact',
    path: '/contact'
}
];
const logo = 'https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png';

export default function Navbar() {
    // const handleDrawerToggle = () => {};
    return (
        <AppBar component="nav"  position="sticky" sx={{margin: 0, padding: 0}}>
            <Toolbar>
                <img
                    src={logo}
                    style={{height: "40px", width: "40px", marginRight: "20px"}}
                    alt={'app-logo'}
                    loading="lazy"
                />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    My Blogs
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item.id} sx={{ color: '#fff' }} component={NavLink} to={item.path}>
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
