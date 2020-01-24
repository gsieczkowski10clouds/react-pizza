import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../../../components/UI/TItle';
import Button from '../../../../components/UI/Button';

import { paths } from "../../../../routes";

function QuickInfo() {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <Title title="our mission" subtitle="let us tell you"/>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                            blanditiis dolorum quae doloremque molestias expedita, eum voluptas
                            distinctio! Molestiae fuga temporibus nemo non vel mollitia nesciunt
                            quaerat facere voluptate earum.
                        </p>

                        <div className="text-center">
                            <Link to={paths.about}>
                                <Button>about</Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuickInfo;