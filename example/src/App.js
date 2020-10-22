import React from 'react'

import { useEmbed } from 'react-embedcode'
import './index.css'

const App = () => {
  const [
    status
  ] = useEmbed('https://www.cognitoforms.com/s/q9_PKa9THU2vJiM3U6wtMg', () =>
    window.Cognito.load('forms', { id: '' })
  )
  const [status2] = useEmbed('//cdn.embedly.com/widgets/platform.js')
  const [status3] = useEmbed(
    'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0'
  )

  console.log(status, status2, status3)

  return (
    <div>
      <h1>Cognito Forms</h1>
      <div>
        <div className='cognito' />
      </div>
      <h1>Instagram (via Embedly)</h1>
      <div>
        <blockquote class='embedly-card'>
          <h4>
            <a href='https://instagram.com/p/89CUyVoVY9/'>
              Photograph by @paulnicklen taken while on assignment for @natgeo.
              This is a photo from the past and I'm here to shoot something of
              much greater importance. However, our mission is being compromised
              by terrible weather. #Follow me on @paulnicklen to see if we
              succeed this week or not. With this heavy rain we will definitely
              not be seeing the aurora borealis tonight. #challenge #nature
              #instaweather #smile #explore
            </a>
          </h4>
          <p>null</p>
        </blockquote>
      </div>
      <h1>Facebook Post</h1>
      <div>
        <div id='fb-root'></div>
        <div
          class='fb-post'
          data-href='https://www.facebook.com/20531316728/posts/10154009990506729/'
          data-show-text='true'
          data-width=''
        >
          <blockquote
            cite='https://www.facebook.com/20531316728/posts/10154009990506729/'
            class='fb-xfbml-parse-ignore'
          >
            Posted by{' '}
            <a href='https://www.facebook.com/facebookapp/'>Facebook App</a>{' '}
            on&nbsp;
            <a href='https://www.facebook.com/20531316728/posts/10154009990506729/'>
              Thursday, 27 August 2015
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default App
