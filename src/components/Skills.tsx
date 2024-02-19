import React from 'react'
import { Progress} from './ui/progress'
import { Card } from './ui/card'





 

const Skills = () => {
  return (
    <main className='h-[296px]'>
    <Card className='Cards p-4 rounded-sm'>
      <div className="container">
        <div className="skills flex justify-between  items-start">
            <div className=" w-2/5">
                <div className="Skilltitle">
                    <div className='hello'>HTML <span className=' float-end'>75%</span></div>
                    <div className=''> <Progress value={75} /></div>
               </div>
                <div className="Skilltitle">
                    CSS <span className=' float-end'>90%</span>
                    <div className=''><Progress value={90}/></div>
                </div>
                <div className="Skilltitle">
                    Tailwind <span className=' float-end'>72%</span>
                    <div className=''><Progress value={72}/></div>
                </div>
                <div className="Skilltitle">
                    PHP <span className=' float-end'>70%</span>
                    <div className=''><Progress value={70}/></div>
                </div>
            </div>

            <div className="col2 w-2/5">
                <div className="Skilltitle ">
                    Javascript <span className=' float-end'>85%</span>
                    <div className=''><Progress value={85}/></div>
                </div>
                <div className="Skilltitle">
                    Typescript <span className=' float-end'>65%</span>
                    <div className=''><Progress value={65}/></div>
                </div>
                <div className="Skilltitle">
                    React <span className=' float-end'>80%</span>
                    <div className=''><Progress value={80}/></div>
                </div>
                <div className="Skilltitle">
                    Next <span className=' float-end'>70%</span>
                    <div className=''><Progress value={70}/></div>
                </div>
            </div>    
        </div>
      </div>
      
       {/* PROGRAMMING LOGOS HERE !!! */}
      </Card>
    </main>
  )
}

export default Skills
