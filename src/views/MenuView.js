import React from 'react';
import Menu from '../components/menu';


class MenuView extends React.Component {

    render() {
        return (
            <Menu />
        )
    }

     componentDidMount() {
         // Fetch menu items here.
    }
}

export default MenuView;