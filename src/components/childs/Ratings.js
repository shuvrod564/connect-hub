import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

const Ratings = ({rating}) => {
  return (
    <>
      {
        rating === '1' && (
            <div className="flex items-center gap-1"> 
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
            </div>
        )
      }
      {
        rating === '2' && (
            <div className="flex items-center gap-1"> 
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
            </div>
        )
      }
      {
        rating === '3' && (
            <div className="flex items-center gap-1"> 
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
            </div>
        )
      }
      {
        rating === '4' && (
            <div className="flex items-center gap-1"> 
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-primary border border-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
            </div>
        )
      }
      {
        rating === '5' && (
            <div className="flex items-center gap-1"> 
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
                <span className="w-5 h-5 text-white border border-primary bg-primary rounded-sm inline-flex items-center justify-center"><MdOutlineStar /></span>
            </div>
        )
      }
    </>
  )
}

export default Ratings
