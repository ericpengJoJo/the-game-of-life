import React from 'react';
import ContainerWrapper from './ContainerWrapper';

function DescriptionBox () {
    return (
        <>
            <ContainerWrapper
                width={(20 * 50) + 95}
                height={200}
            >
                <div>Description</div>
            </ContainerWrapper>
        </>
    )
}

export default DescriptionBox;