import React from 'react';
import Back from '../assets/back.png';
import main from '../assets/Main.jpeg';

const HomePage = () => {
  return (
    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column',borderBottom: '1px solid #D8D8D8',paddingBottom: '2rem',marginLeft: 'none',paddingLeft: '4rem',borderLeft: 'none' }}>
      <div>
        <button
          style={{
            marginBottom: '1rem',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            fontFamily: 'arial',
            fontSize: '1rem',
            color: '#00b8a9',
          }}
        >
          <img src={Back} style={{ height: '25px', width: '25px', paddingRight: '1rem' }} />
          Back
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        
        <div style={{ flex: '1 1 30%' }}>
          <img src={main} style={{ width: '100%', height: 'auto' }} />
        </div>

        
        <div style={{ flex: '1 1 30%', marginLeft: '2rem' }}>
          <p style={{ fontWeight: 'bolder', fontSize: '2.5vw', margin: '0' }}>Tossed - St Martin's Lane</p>
          <p style={{ fontSize: '1.2vw' }}>10 - 20 min· Chicken·Salads·Healthy</p>
          <p style={{ fontSize: '1.2vw' }}>0.20 miles away·Closes at 21:00·£7.00 minimum</p>
          <button
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '1.2vw',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0.2rem 0' }}>Info</p>
            <p style={{ margin: '0.2rem 0 1rem' }}>Map, allergens and hygiene rating</p>
          </button>
          <br />
          <button
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '1.2vw',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0.2rem 0' }}>4.8 Excellent</p>
            <p style={{ margin: '0.2rem 0' }}>See all 500 reviews</p>
          </button>
        </div>

      
        <div
          style={{
            textAlign: 'right',
            flex: '1 1 auto',
            paddingLeft: '2rem',
            paddingTop: '1rem',
            paddingRight: '4rem',
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '1.2vw' }}>
              Deliver is 5 - 15 min
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#00b8a9',
                  paddingLeft: '0.6rem',
                  boxSizing: 'border-box',
                  fontSize: '1.2vw',
                }}
              >
                Change
              </button>
            </p>
            <button
              style={{
                marginTop: '1rem',
                borderRadius: '0.3rem',
                border: '1px solid #D8D8D8',
                backgroundColor: 'transparent',
                padding: '0.5rem 1rem',
                boxSizing: 'border-box',
                fontSize: '1.2vw',
              }}
            >
              Start Group Order
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
