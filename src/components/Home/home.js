import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideosList/videosList';
import Pointstable from '../Pointstable/pointstable'

const Home = () =>{
    return (
        <div>
            {/* Adding additional attributes in order to reuse the widget  */}
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots:false
                }}
            />
            
             <NewsList
                type="card"
                loadmore={true}
                start={1}
                amount={3}
            />
                <Pointstable></Pointstable>
                <VideosList type="card" title={true} loadmore={true} start={0} amount={3} />  
            </div>
    )
}

export default Home;