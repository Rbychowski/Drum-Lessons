import React, { Component } from 'react';

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [
                {
                    id: 0,
                    name: 'First Lesson',
                    image: 'assets/images/free.jpg',
                    price: 0,
                    description: "First Lesson is always FREE!"
                
                },
                {
                    id: 1,
                    name: '30-min Lesson',
                    image: 'assets/images/thirty.jpg',
                    price: 30,
                    description: "All lessons are personalized for each student with a strong focus on rudiments. designed towards motivating creative thinking and inspiring the player to practice and learn independently."
                },
                {
                    id: 2,
                    name: '60-min Lesson',
                    image: 'assets/images/sixty.jpg',
                    price: 60,
                    description: "I am not a clock watcher, and I allow time in-between lessons to accommodate running over if it is needed."
                },
                {
                    id: 3,
                    name: 'Two 30-min Lessons',
                    image: 'assets/images/twothirty.jpg',
                    price: 49,
                    description: "Subscribe and Save! Two thirty minute lessons a week. *Must be subscribed "
                }
            ],
        };
    }

    render() {
        const directory = this.state.lessons.map(lesson => {
            return (
                <div key={lesson.id} className="col">
                    <img src={lesson.image} alt={lesson.name} />
                    <h2>{lesson.name}</h2>
                    <p>{lesson.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}