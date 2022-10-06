import React from 'react'

type AppProps = {
  message: string;
}; 

const Header = ({ message }: AppProps) => <div style={{textAlign: 'center'}}>{message}</div>;

export default Header