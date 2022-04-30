import React, { Fragment } from "react";
import Card from "../Card/Card";
import cardModule from '../Card/Card.module.css';

const PlatformList = (props) => {

    return (
        <Fragment>
            <div className="col-6">
                <Card className={cardModule.rounded3}>
                    <div className='shadow text-black'>
                        <div className='p-3'>
                            <h2 className="text-secondary">Platform list</h2>
                            <hr />
                            <ul className="list-group">
                                {props.platforms.map((plat) => (
                                    <li key={plat.id} className="list-group-item borde border-1 rounded-3 mb-3">{plat.platform} {plat.description} </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}
export default PlatformList;