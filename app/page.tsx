'use client'
import React,{FC,useState} from "react"
import Header from './components/Layout/Header';


interface Props{

}

const Page: FC<Props> = (props) =>{

  return(
    <>
    <div className="overflow-hidden">
      <Header/>
    </div>
    </>
  )
}

export default Page;