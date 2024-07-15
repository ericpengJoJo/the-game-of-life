import React from 'react';
import ContainerWrapper from './ContainerWrapper';

function ExampleBox () {
    return (
        <>
            <ContainerWrapper
                width={(20 * 20) + 95}
                height={200}
            >
                <div>Description</div>
            </ContainerWrapper>
        </>
    )
}

export default ExampleBox;