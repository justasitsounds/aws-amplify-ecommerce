// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Card, Button, Divider, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

function CheckoutPayment(props) {
    const {total, cart} = props
    console.log('cart', cart)

    const cartItems = cart.items.map((item)=>{
        return <SummaryText>{item.quantity} x {item.name} ${item.price}</SummaryText>
    })

    return(
        <div>
            <Card fluid>
                <Card.Content>
                    <Button fluid color='orange' loading={props.placedOrder} onClick={props.onOrder}>Place your order</Button>
                    <Divider/>
                    <BoldText>Order Summary</BoldText>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <SummaryText>Items:</SummaryText>
                            </Grid.Column>
                            <Grid.Column width={10} textAlign='right'>
                                {cartItems}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <SummaryText>Shipping & handling:</SummaryText>
                            </Grid.Column>
                            <Grid.Column width={10} textAlign='right'>
                                <SummaryText>$0.00</SummaryText>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider/>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column floated='left' width={7}>
                                <TotalText>Order total:</TotalText>
                            </Grid.Column>
                            <Grid.Column floated='left' textAlign='right' width={1}>
                                <TotalText>${total}</TotalText>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
              </Card>
        </div>
    )
}

export default CheckoutPayment

const BoldText = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 1em;
`

const SummaryText = styled.div`
  font-size: .9em;
  padding-right: 0em;
`

const TotalText = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: #B12704;
`