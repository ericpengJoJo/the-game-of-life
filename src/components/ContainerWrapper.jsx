import React from 'react';

function ContainerWrapper ({ children, width, height }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 30
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width,
                    height: height,
                    backgroundColor: '#FFFAFA',
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
                        backgroundColor: '#FFFAFA',
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