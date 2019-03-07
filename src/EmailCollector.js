import React from 'react';
// import { Input, Button } from 'react-strap';

const EmailCollector = () => {
    return (
        <form name="email-collector" data-netlify="true">
            <input 
            type="text"
            placeholder="stay in touch!"
            />
            <button color="link">submit</button>
        </form>
    );
};

export default EmailCollector;