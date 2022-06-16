import React, { useEffect } from 'react'
import { useNavigate, useNavigationType, useParams } from 'react-router-dom'
import { useJobContext } from '../context/jobs.context'

const JobDetailsPage = () => {
  const { job, getJob, jobs } = useJobContext()
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()

  useEffect(() => {
    getJob(+id!)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, jobs])

  if (!job) return <p>Incorrect Job ID</p>

  return (
    <div className='job-detail-page'>
      <button className="btn" onClick={ () => navigate(-1) }>Back</button>
      <h1>{ job?.title }</h1>

      <img className='job-detail-image' src={ job?.cover_image } alt="" />
    </div>
  )
}

export default JobDetailsPage
