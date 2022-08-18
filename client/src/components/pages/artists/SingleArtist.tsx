import { useParams } from 'react-router-dom'
import useMyQuery from '../../../utils/hooks/UseMyQuery'
import IResponse from '../../../utils/models/Response'
import { IAlbum } from '../../../utils/models/Track'
import LineCard from '../../layout/common/LineCard'
import AlbumCard from '../home/AlbumCard'
import MyPageWrapper from '../MyPageWrapper'

export default function SingleArtist() {
    const { id } = useParams()
    const { data } = useMyQuery<IResponse<IAlbum[]>>(`/track/artist/get-albums/${id}`, [] as any)

    return (
        <MyPageWrapper>
            <LineCard>
                <h1 className='font-semibold'>All Albums For This Artist</h1>
                {data?.data?.length == 0 && <>
                    <p>Don't have any albums for this Artist.</p>
                </>}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
                    {
                        data?.data?.map((item, idx) => {
                            return <AlbumCard key={idx} item={item} />
                        })
                    }
                </div>
            </LineCard>
        </MyPageWrapper>
    )
}
