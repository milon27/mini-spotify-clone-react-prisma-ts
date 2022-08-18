import { BsFileEarmarkMusic } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import URL from '../../../utils/constant/URL'
import { IAlbum } from '../../../utils/models/Track'
import MyCard from '../../layout/common/MyCard'

interface IAlbumCard {
    item: IAlbum
}

export default function AlbumCard({ item }: IAlbumCard) {
    return (
        <MyCard className=''>
            <BsFileEarmarkMusic className='w-8 h-8 text-primary' />
            <h3 className=''>{item.name}</h3>
            <small className='text-xs'>by {item?.author?.name}</small>
            <br />
            <Link to={URL.ALBUMS + `/${item.id}`} className='text-xs text-primary'>View all tracks</Link>
        </MyCard>
    )
}
