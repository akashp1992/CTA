import { useLottie } from 'lottie-react';
import React from 'react'
import emptyProject from '../../../images/client/json/empty_project.json'
const EmptyData = ({ msg }) => {
    const options = {
        animationData: emptyProject,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ width: '70%' }}>{View}</div>
            <h4 style={{ marginTop: '-170px', fontFamily: 'poppins !important', fontWeight: '700 !important', color: '#3A3A3A !important' }}>
                {msg}
            </h4>
        </div>
    )
}

export default EmptyData