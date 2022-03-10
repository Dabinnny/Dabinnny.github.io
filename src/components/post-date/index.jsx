import React from 'react'

import './index.scss'

export const PostDate = ({ date, category }) => {
  return (
    <p className="post-date">
      <span>{category} | </span>
      <span className="thumbnail-date" style={{ color: '#ed4264' }}>{date}</span>
    </p>
  )
}
