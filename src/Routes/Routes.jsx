import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import BooksPage from '../components/BooksPage'
import BookDetailsPage from '../components/BookDetailsPage'

const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route exact path="/books" component={BooksPage} />
            <Route exact path="/books/:id" component={BookDetailsPage} />
        </div>
    )
}

export default Routes