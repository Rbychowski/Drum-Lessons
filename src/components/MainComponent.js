import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import LessonInfo from './LessonInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LESSONS } from '../shared/lessons';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: LESSONS,
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory lessons={this.state.lessons} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;