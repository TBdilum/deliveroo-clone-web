import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
        <div>
            <Link to='/'>
                <img src='../assets/deliverooLogo.svg'/>
            </Link>
        </div>

        <div className='search-bar'>
            <input placeholder="Search Tossed - St Martin's Lane" />
        </div>

        <div>
            <Link to='/SignPage'>
                <button >sign up or login</button>
            </Link>
            <button>Account</button>
        </div>

    </div>
  )
}

export default header