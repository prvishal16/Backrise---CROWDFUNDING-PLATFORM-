import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDummyUser } from '../services/firebase';

const NavBar = () => {
  let user = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogOut = () => {
    setDummyUser(null);
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }} aria-label="Navigation bar">
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} aria-label="logo: BackRise Nexus. links to the home page.">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <span style={{
                fontSize: '26px',
                fontWeight: '800',
                color: 'white',
                letterSpacing: '1px'
              }}>
                🚀 BackRise Nexus
              </span>
            </Link>
          </Box>
          <Link to="/campaign/create" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Create Campaign</Button>
          </Link>
          {user ? (
            <>
              <Button color="inherit" onClick={handleLogOut}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
