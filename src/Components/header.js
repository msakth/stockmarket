import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css';


const Header = () => {
  return(
    <div className="header">
        <div>
          <Link to="/">Stock</Link>
          <Link to="/tradelist">TradeList</Link>
          <Link to="/tradeCalculations">TradeCalculations</Link>
        </div>
    </div>
  );
}

export default Header;
