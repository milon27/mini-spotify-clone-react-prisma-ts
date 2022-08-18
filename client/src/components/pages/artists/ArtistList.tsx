import useMyQuery from '../../../utils/hooks/UseMyQuery'
import IResponse from '../../../utils/models/Response'
import { IArtist } from '../../../utils/models/Track'
import LineCard from '../../layout/common/LineCard'
import MyPageWrapper from '../MyPageWrapper'
import ArtistCard from './ArtistCard'

export default function ArtistList() {
    const { data, loading } = useMyQuery<IResponse<IArtist[]>>('track/artists', {} as any)

    return (
        <MyPageWrapper>
            <LineCard>
                <h1 className='font-semibold'>All Artists</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
                    {
                        data?.data?.map((item, idx) => {
                            return <ArtistCard key={idx} item={item} />
                        })
                    }
                </div>
            </LineCard>
        </MyPageWrapper>
    )
}
