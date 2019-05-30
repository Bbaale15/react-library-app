import React from 'react';

const menu = (props) => {
    const { menu } = props;
    return (
        <div className="row">
            <div className="col-12">
                <h1>Menu </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Meal Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(item => <tr key={item.meal_id}>
                            <th scope="row">{item.meal_id}</th>
                            <td>{item.meal_name}</td>
                            <td>{item.price}</td>
                            <td>{item.meal_status}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default menu;