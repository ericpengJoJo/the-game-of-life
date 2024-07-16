import React from 'react';
import ContainerWrapper from './ContainerWrapper';
import ExampleBox from './ExampleBox';

function DescriptionBox () {
    return (
        <div
            style={{
                display: 'flex'
            }}
        >
            <ContainerWrapper
                width={(20 * 30) + 95}
                height={300}
            >
                <div>
                    <div></div>
                </div>
            </ContainerWrapper>
            <ExampleBox />
        </div>
    )
}

export default DescriptionBox;