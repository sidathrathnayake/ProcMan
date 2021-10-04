import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './Payment';

const PUBLIC_KEY ="pk_test_51JglCVEFuCYeW14eXSKMBUiz3qa64JOYbnovNaN1ASOrkIXFhGv2tGez5QgqIdYgHd2YwuWdyz06I2O2s2N8lRwB00Ngh0DQZC";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function Stripe_Container() {
    return (
        <Elements stripe={stripeTestPromise}>
            <Payment />
        </Elements>
    )
}
