import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { Card,CardContent } from './ui/card';



const Education = () => {
  return (
    <div className='h-[296px]'>   
    <Card className='Cards p-12 rounded-sm'>
        <CardContent className='text-lg'>
        <div className="cont">
            <ol className=' list-disc '>
                <li className='mb-3'><span className='font-bold'>Senior High School</span> 
                  <ul>
                    <li>AMA MANDALUYONG (TECH.VOC: Computer Programming) </li>
                    <li>2016-2018</li>
                  </ul>
                </li>
                <li><span className='font-bold'>College</span>
                  <ul>
                    <li>N.E.U.S.T (Bachelor of Science in Information Technology)</li>
                    <li>2019-Current</li>
                  </ul>
                </li>
                
            </ol>
        </div>
        </CardContent>
    </Card>
      
    </div>
    
  )
}

export default Education
