import { GiMusicSpell } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import URL from '../../../utils/constant/URL'
import { IArtist } from '../../../utils/models/Track'
import MyCard from '../../layout/common/MyCard'

interface IArtistCard {
    item: IArtist
}

export default function ArtistCard({ item }: IArtistCard) {
    return (
        <MyCard className=''>
            <GiMusicSpell className='w-8 h-8 text-primary' />
            <h3 className=''>{item.name}</h3>
            <Link to={URL.ARTISTS + `/${item.id}`} className='text-xs text-primary'>View all album</Link>
        </MyCard>
    )
}
