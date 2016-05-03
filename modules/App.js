import React from 'react'
import Countdown from 'react-countdown-to-future-date'
import AtvImg from 'react-atv-img';
//import YouTube from 'react-youtube'


const App = () => (
    <div className="App">
        {/*<YouTube
            className='video'
            videoId="2g811Eo7K8U"
            opts={{
                height: '100%',
                width: '100%',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,
                    controls: 0,
                    loop: 1,
                    showinfo: 0,
                    modestbranding: 1
                }
            }}
        />*/}
        <video className='video' autoPlay loop><source src="https://static1.squarespace.com/static/570bc29fc6fc08215d11dd1d/t/572836171bbee0a94c5b0774/1462253244014/nicolo+flying+chairs.mp4" type="video/mp4" /></video>
        {/*
        <div className='logo logoTxt red'>
            <div>gdn</div>
            <div>tr.</div>
        </div>
        */}
        <Countdown givenDate={"May, 15, 2016"}  afterUnmount={()=>{}}/>
        <AtvImg
            layers={[
                require('../res/logo-back.png'),
                require('../res/logo-front.png'),
            ]}
            staticFallback={require('../res/logo.jpg')}
            isStatic={false}
            className={'atv-logo'}
            style={{ width: 310, height: 310 }}
		/>
		<div className="menu">
			<input type="checkbox" id="menu_opener_id" className="menu_opener" />
				<label htmlFor="menu_opener_id" className="menu_opener_label"></label>
				<div className="barre_hamburger"></div>
                <a href="https://www.facebook.com/events/639338559554184/" className="link_one link_general"></a>
                <a href="https://www.instagram.com/gd.ntr/" className="link_two link_general"></a>
				<a href="#" className="link_three link_general"></a>
				<a href="mailto:daryoosh.ka@gmail.com" className="link_four link_general"></a>
		</div>
    </div>
)

export default App
