import { Link } from 'react-router-dom';
import AnchorTemporaryDrawer from './AccountSideBar';
import logo from '../assets/deliverooLogo.svg';
import home from '../assets/home.png';

const Header = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '0.5px solid black',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ paddingRight: '10rem',paddingLeft: '2rem',paddingTop: '0.5rem' }}>
        <Link to="/">
          <img src={logo} alt="Deliveroo Logo" />
        </Link>
      </div>

      <div className="search-bar" style={{ position: 'relative', flex: 1 }}>
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#aaa',
            cursor: 'pointer',
          }}
        >
          🔍
        </span>
        <input
          type="text"
          placeholder="Search Tossed - St Martin's Lane"
          style={{
            borderRadius: '0.3rem',
            width: '100%',
            padding: '10px 40px 10px 10px',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: '15rem',
          paddingRight: '4rem',
          whiteSpace: 'nowrap',
        }}
      >
        <div style={{ marginRight: '2rem', width: '100%' }}>
          <Link to="/SignPage" style={{
              textDecoration: 'none',
            }}>
            <button
              style={{
                display: 'flex',
                flexDirection: 'row',
                height: '2.5rem',
                width: '110%',
                backgroundColor: 'white',
                borderRadius: '0.3rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
                <img src={home} style={{width: '15px',height: '15px',paddingRight: '0.4rem'}}/>
              Sign Up or Login
            </button>
          </Link>
        </div>

        <div>
          <AnchorTemporaryDrawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
