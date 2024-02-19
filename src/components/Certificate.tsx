import React from 'react'
import { Card,CardContent } from './ui/card'

const Certificate = () => {
  return (
    <div className='h-[296px]'>   
    <Card className='Cards p-12 rounded-sm'>
        <CardContent className='text-lg'>
        <div className="cont">
            <ol className=' list-disc mb-3'>
                <li>Hybrid Seminar Workshop on Photo and Video Editing</li>
                <li>HTML and CSS</li>
                <li>Techtrends</li>
            </ol>
        </div>
        </CardContent>
    </Card>
      
    </div>
  )
}

export default Certificate
