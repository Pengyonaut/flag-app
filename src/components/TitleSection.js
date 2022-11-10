import React from 'react'
import QuizzProgress from './QuizzProgress'
import { Container } from 'reactstrap'

export default function TitleSection({ongoingQuizz, progress, target}) {
  return (

        <Container fluid className={"bg-white text-black mb-3 pb-1 bg-content"}>
            {ongoingQuizz &&
            <div>
                    <QuizzProgress questionNumb={progress} questionTarget={target} val={5}/>
                    <h1 className='mx-2 h2 text-left'>What flag is it?</h1>
            </div>
            }

        </Container>

  )
}
