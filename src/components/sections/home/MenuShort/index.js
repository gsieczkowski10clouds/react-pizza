import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../../UI/TItle';
import Button from '../../../UI/Button';
import ProductsList from '../../../menu/ProductsList';

import { paths } from "../../../../routes";

function MenuShort() {

    return (
        <section>
            <div className="container">

                <div className="row">
                    <div className="col-12">

                        <Title title="featured items" subtitle="little taste"/>

                    </div>
                </div>

                <ProductsList/>

                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <Link to={paths.menu}>
                                <Button>menu</Button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default MenuShort;