import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const Signup = () => (
    <>
    <AmplifySignOut />
    </>
    
);

export default withAuthenticator(Signup);