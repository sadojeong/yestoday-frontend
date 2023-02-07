import React from 'react'
import Modal from 'react-modal'

const FollowerModal = () => {
    return (
        <Modal id='FollowerModal'
            style={{
                overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }
            }}
            isOpen={true} ariaHideApp={false}
            className='outline-none absolute z-50 p-2 text-center -translate-x-1/2 -translate-y-1/2 bg-white border-2 w-[400px] rounded-2xl h-[650px] top-1/2 left-1/2'>
        </Modal>
    );
}


export default FollowerModal