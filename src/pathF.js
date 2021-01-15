import React from 'react';
import { Link } from 'react-router-dom'

const pathF = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/login'/>
                </li>
                <li>
                    <Link to='/home'/>
                </li>
            </ul>
        </>
    )
}

export default pathF