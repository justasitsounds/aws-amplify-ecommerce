// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
// import InitState from './InitState'
import CheckoutBanner from '../components/CheckoutBanner'

function PlacedOrder() {
    return (
        <div>
            {/* <InitState/> */}
            <CheckoutBanner  message='Order Complete' />
            <div style={mainDiv}></div>
        </div>
    )
}

export default PlacedOrder

const mainDiv = {
    marginLeft: '5em',
    marginRight: '1em',
    marginTop: '2em'
}