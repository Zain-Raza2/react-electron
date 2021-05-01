import React from 'react'

export default function App() {
    return (
        <div className='app'>
            <div className='container main box_bottom_shadow'>
                <div className='container secondary box_bottom_shadow'>
                    <h1>app</h1>
                    <button onClick={() => 
                        {electron.notificationApi.sendNotification('wow you actuall idiot, you thought this would do something.')}}> notify
                    </button>
                </div>
            </div>
        </div>
    )
}
