import React from 'react'

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__undo'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__dislike'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__boost'>
                <FlashOnIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__like'>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__superLike'>
                <GradeIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
