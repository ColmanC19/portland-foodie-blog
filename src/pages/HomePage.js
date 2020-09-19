import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


const HomePage = () => (
    <>
    <h1>Portland Food Blog</h1>
    <img style={{maxWidth: "100%"}} src= "https://pbs.twimg.com/media/DY2bN3VWkAYBdXC.jpg" alt="gathering"/>
    <AmplifySignOut />

    </>
    
);

export default withAuthenticator(HomePage);