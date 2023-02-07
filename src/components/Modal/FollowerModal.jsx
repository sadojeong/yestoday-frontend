import React from 'react'
import Modal from 'react-modal'

const FollowerModal = () => {
    return (
        <Modal className='outline-none flex fixed z-auto text-center -translate-x-1/2 -translate-y-1/2 bg-white border-2 w-[800px] rounded-2xl h-[650px] top-1/2 left-1/2'
            isOpen={true} ariaHideApp={false}>
            <div className='w-1/5 p-1 border-r-2 h-1/5'>
                안녕하세요
            </div>
        </Modal>
    )
}

export default FollowerModal