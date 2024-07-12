import React from 'react';

function ContainerWrapper ({ children, width, height }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width,
                    height: height,
                    backgroundColor: 'white',
                    border: '4px outset black',
                    borderRadius: 5
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: width,
                        height: height,
                        backgroundColor: 'white',
                        borderLeft: '15px solid #03A9F4',
                        borderRight: '15px solid #03A9F4',
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContainerWrapper;