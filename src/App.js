// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import InitState from './pages/InitState'
import TopMenu from './components/TopMenu'
import Carousel from './components/Carousel'
import ItemTable from './components/ItemTable'

import './App.css'

function App() {
    return (
        <div style={styles}>
            <InitState/>
            <TopMenu />
            <Container text style={{ marginBottom: '1em' }}>
                <Header as='h1' style={{ textAlign: 'center' }}>Octank Retail</Header>
            </Container>
            <Container fluid>
                <Carousel />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>Latest Fashion for Women</Header>
                <p>Looking for something new and on-trend? Our collection of women’s new arrivals will have everyone asking you where you got your latest look from!</p>
                <p>Whether you’re looking for a new outfit, complete with accessories or just want to stay ahead of the fash-pack, you’ll find it in our just arrived edit. Shop the hottest new arrivals, right here, right now…</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='women' />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>Latest Fashion for Men</Header>
                <p>Looking for something new and on-trend? Our collection of men’s new arrivals will have everyone asking you where you got your latest look from!</p>
                <p>Whether you’re looking for a new outfit, complete with accessories or just want to stay ahead of the fash-pack, you’ll find it in our just arrived edit. Shop the hottest new arrivals, right here, right now…</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='men' />
            </Container>
        </div>
    );
}

export default App
// export default withAuthenticator(App, { usernameAttributes: 'email', signUpConfig });

const styles = {
    marginLeft: '1em',
    marginRight: '1em'
}