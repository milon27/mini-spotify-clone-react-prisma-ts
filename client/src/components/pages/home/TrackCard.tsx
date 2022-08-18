import React, { useState } from 'react'
import { BsMusicNoteBeamed, BsPlayCircle, BsPauseCircle, BsBookmarkHeart } from 'react-icons/bs'
import { toast } from 'react-toastify'
import AxiosHelper from '../../../utils/AxiosHelper'
import { ITrack } from '../../../utils/models/Track'
import MyCard from '../../layout/common/MyCard'

interface ITrackCard {
    item: ITrack
}

export default function TrackCard({ item }: ITrackCard) {
    const [playing, setPlaying] = useState<HTMLAudioElement | undefined>(undefined)
    const [loading, setLoading] = useState(false)

    const play = (url: string) => {
        var audio = new Audio(url || 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
        setPlaying(audio)
    }

    const pause = () => {
        playing?.pause()
        setPlaying(undefined)
    }

    const addToFav = async () => {
        // track/add-fav/:id
        await AxiosHelper.postData(setLoading, `track/add-fav/${item.id}`, {}, () => {
            toast("Added To Fav List")
        })
    }

    return (
        <MyCard className=''>
            <div className='flex gap-2 justify-between items-center'>
                <BsMusicNoteBeamed className='w-8 h-8 text-primary' />
                <BsBookmarkHeart className='cursor-pointer' onClick={() => {
                    addToFav()
                }} />
            </div>
            <h3 className='text-sm'>{item?.title}</h3>
            {playing == undefined ? <BsPlayCircle className='cursor-pointer' onClick={() => {
                play(item?.audioUrl)
            }} /> : <BsPauseCircle className='cursor-pointer' onClick={() => {
                pause()
            }} />}
        </MyCard>
    )
}
