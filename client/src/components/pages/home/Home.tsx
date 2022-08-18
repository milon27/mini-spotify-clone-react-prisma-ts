import useMyQuery from '../../../utils/hooks/UseMyQuery'
import { IAlbum, IFav } from '../../../utils/models/Track'
import LineCard from '../../layout/common/LineCard'
import Loading from '../../layout/common/Loading'
import Spacer from '../../layout/Spacer'
import MyPageWrapper from '../MyPageWrapper'
import AlbumCard from './AlbumCard'
import TrackCard from './TrackCard'

interface IHomeData {
    message: string,
    data: {
        albumList: IAlbum[],
        favList: IFav[]
    }
}

export default function Home() {
    const { data, loading } = useMyQuery<IHomeData>('track/get-album-fav-list', {} as any)

    return (
        <MyPageWrapper>
            {
                loading && <Loading />
            }
            <LineCard>
                <h1 className='font-semibold'>Latest Albums</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
                    {
                        data?.data?.albumList?.map((item, idx) => {
                            return <AlbumCard key={idx} item={item} />
                        })
                    }
                </div>
            </LineCard>
            <Spacer px={20} />
            <LineCard>
                <h1 className='font-semibold'>My Favourite Music</h1>
                {data?.data?.favList.length == 0 && <>
                    <p>You don't have any track in your fav list.</p>
                </>}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                    {
                        data?.data?.favList?.map((item, idx) => {
                            return <TrackCard key={idx} item={item?.track} />
                        })
                    }
                </div>
            </LineCard>
        </MyPageWrapper>
    )
}
