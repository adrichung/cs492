import React from 'react'
import "./Widgets.css"

export default function Widgets() {
  return (
    <div className='widgets'>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheOpenCourt&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="340" 
        height="331" 
        style={{border:"none",overflow:"hidden"}}
        scrolling="no" frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="yay">
        </iframe>
    </div>
  )
}
