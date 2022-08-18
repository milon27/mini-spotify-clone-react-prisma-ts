import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'
import useMyQuery from '../../../utils/hooks/UseMyQuery'
import IResponse from '../../../utils/models/Response'
import { ITrack } from '../../../utils/models/Track'
import Spacer from '../../layout/Spacer'
import MyPageWrapper from '../MyPageWrapper'
import TrackCard from './TrackCard'

export default function SingleAlbum() {
    const nav = useNavigate()
    const { id } = useParams()
    const { data, loading } = useMyQuery<IResponse<ITrack[]>>(`track/album-tracks/${id}`, [] as any)

    return (
        <MyPageWrapper>
            <div className='flex gap-2 items-center cursor-pointer ' onClick={() => {
                nav(-1)
            }} >
                <BsArrowLeft />
                <h1 className='font-thin '>Back</h1>
            </div>
            <Spacer />
            {
                data?.data?.length == 0 ? <>
                    <h1 className='font-semibold text-primary text-center'>No track Found for this album.</h1>
                </> : <>
                    <h1 className='font-semibold text-primary text-center'>All track of {data?.data?.[0].album?.name}</h1>
                    <Spacer />
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                        {
                            data?.data?.map((item, idx) => {
                                return <TrackCard key={idx} item={item} />
                            })
                        }
                    </div>
                </>
            }

        </MyPageWrapper>
    )
}
