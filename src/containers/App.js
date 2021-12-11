import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json()
        }).then(users => {
            this.setState({robots: users})
        })
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})
        // console.log(e.target.value);        
    }
    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (!robots.length) { {/* if (robots.length === 0) */}
            return <h1 className="tc">Loading...</h1>
        } else {
            return (
                <div className="tc mainDiv">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/> {/* searchChange je props koji prihvata SearchBox komponenta */}
                    <Scroll>
                        <CardList robots={filteredRobots} /> {/* filteredRobots se sada koristi kao props i komunicira sa CardLIst */}
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;