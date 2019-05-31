import  React  from 'react';

const loginHoc = (Component) => {
    return class extends React.Component {
        componentDidMount() {;
        const token = localStorage.getItem('token')
        if(!token){
            this.props.history.push('/login');
        }
    }

    render(){
        return (<Component {...this.props }/>)
    }
    }
}
export default loginHoc;