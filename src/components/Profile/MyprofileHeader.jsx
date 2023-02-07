import React from 'react'

const MyProfileHeader = props => {
    const imgSrc = "/images/" + props.user.imageUrl

    return (
        <div className='flex justify-center w-full mr-7 h-2/6'>
            <div className='flex mt-8'>
                <div className='overflow-hidden w-28 h-28'>
                    <img className='w-full h-full rounded-full' src={imgSrc} alt="sasdg" />
                </div>
                <section className='w-2/3 ml-8'>
                    <div className='flex'>
                        <h2>
                            <a href="">{props.user.nickname}</a>
                        </h2>
                        <div className='flex ml-1'>
                            <div className='flex'>
                                <button className='flex items-center justify-center w-20 ml-2 rounded-lg bg-slate-200'>
                                    <div className='text-[10px] font-bold'>프로필 편집</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <ul className='flex w-full'>
                            <li className='w-1/3'>
                                <div className='flex text-[9px]'>
                                    게시물 <span className='ml-1 font-bold'>{props.postInfo.length}</span>
                                </div>
                            </li>
                            <li className='w-1/3 ml-2'>
                                <a href={`/profile/${props.user.nickname}/follower`} role="link">
                                    <div className='flex text-[9px]'>
                                        팔로워 <span className='ml-1 font-bold'>{props.numberOfFollower}</span>
                                    </div>
                                </a>
                            </li>
                            <li className='w-1/3 ml-2'>
                                <a href={`/profile/${props.user.nickname}/following`}>
                                    <div className='flex text-[9px]'>
                                        팔로우 <span className='ml-1 font-bold'>{props.followinginfo.length}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex mt-3'>
                        <span className='text-[9px] font-bold'>
                            {props.user.description}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyProfileHeader