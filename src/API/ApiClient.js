import React, { useEffect } from 'react';
import crypto from 'crypto-js'
import axios from 'axios';
import { useSelector } from 'react-redux';
import inMemoryJwt from '../services/inMemoryJwtService';
import inMemoryJwtService from '../services/inMemoryJwtService';

export default axios.create({
    baseURL: "https://cta-api.corporatetransparencyfiling.com/public/api/",
    headers: {
        'Authorization': `Bearer ${inMemoryJwtService.getToken()}`
    },
});
