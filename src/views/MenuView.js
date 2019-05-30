import React from 'react';
import Menu from '../components/menu';
import axios from 'axios';


class MenuView extends React.Component {

    state = {
        menu: []
    }

    render() {
        return (
            <Menu menu={this.state.menu} />
        )
    }

    componentDidMount() {
        // Fetch menu items here.
        axios.get(`https://fast-foods-api-main.herokuapp.com/api/v2/menu`)
            .then(res => {
                const menu = res.data.menu;
                this.setState({ menu });
            })
    }
}

export default MenuView;