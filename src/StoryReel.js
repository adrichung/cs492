import React from 'react'
import "./StoryReel.css"
import Story from './Story'

const img =
  'https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1920/public/2021-04/VC-Disneyland-Reopen-Mickey-SUPPLIED-1280x640.jpg.webp?itok=RU-Grd5J';

const img2 =
  'https://www.consumerprotectionbc.ca/wordpress/wp-content/uploads/2022/09/choosing-new-gym-scaled.jpg'
const img3 =
  'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/21/USAT/72689401007-vpc-april-total-solar-eclipse-explainer-nasa.jpg?crop=1919,1079,x0,y0&width=660&height=371&format=pjpg&auto=webp'

export default function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
            image={img}
            profileSrc="https://www.thesprucepets.com/thmb/DRYnRM01YDiFUK1mUIifr5nj60k=/4239x0/filters:no_upscale():strip_icc()/ricky-kharawala-adK3Vu70DEQ-unsplash-0fd4bcb628bd49c88d8a023130132a7f.jpg"
            title="Adrian"
        />
        <Story
            image={img2}
            profileSrc="https://www.cats.org.uk/media/13136/220325case013.jpg?width=500&height=333.49609375"
            title="David"
        />
        <Story
            image={img3}
            profileSrc="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            title="Michelle"
        />
    </div>
  )
}
