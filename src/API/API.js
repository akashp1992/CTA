import React from 'react';

import axios from 'axios';
import inMemoryJwtService from '../services/inMemoryJwtService';

export default axios.create({
    baseURL: "https://cta-api.corporatetransparencyfiling.com/public/api/",
    headers: {
        'Authorization': `Bearer ${inMemoryJwtService.getToken()}`
    },
});
