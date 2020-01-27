import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../../../components/UI/TItle';
import Button from '../../../../components/UI/Button';

import { paths } from "../../../../routes";

function MenuShort() {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <Title title="featured items" subtitle="little taste"/>

                        MENU

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