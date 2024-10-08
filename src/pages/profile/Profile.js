import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className='profile'>
        <div className='profile-bar'>
            <ul>
                <li>
                    <img src='/img/bullet.png' alt='bullet'/>
                    <div>
                        <p>BULLET</p>
                        <p><b>3117</b> 46,498 games</p>
                    </div>
                </li>
                <li>
                    <img src='/img/blitz.png' alt='blitz' />
                    <div>
                        <p>BLITZ</p>
                        <p><b>2755</b> 4,856 games</p>
                    </div>
                </li>
                <li>
                    <img src='img/rapid.png' alt='rapid' />
                    <div>
                        <p>RAPID</p>
                        <p><b>2672</b> 237 games</p>
                    </div>
                </li>
                <li>
                    <img src='/img/classical.png' alt='classical' />
                    <div>
                        <p>CLASSICAL</p>
                        <p><b>?</b> 6 games</p>
                    </div>
                </li>
                <li>
                    <img src='/img/daily.png' alt='daily' />
                    <div>
                        <p>DAILY</p>
                        <p><b>?</b> 12 games</p>
                    </div>
                </li>
                <hr />
                <li>
                    <img src='/img/puzzles.png' alt='puzzles' />
                    <div>
                        <p>PUZZLES</p>
                        <p><b>2652</b> 2,933 games</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className='profile-content'>
            <div className='profile-content-header'>
                <div>
                    <img src='/img/state.png' alt='state' />
                    <p>penguingim1</p>
                </div>
                <img src='/img/profile_nav.png' alt='profile-nav' />
            </div>
            <div className='profile-content-body'>
                <div className='barline'>
                    <img src='/img/barline.png' alt='barline' />
                    <hr />
                    <div className='info'>
                        <p><b>Andrew Tang</b><br /><i>suddenly, the champion returns with initiative and vengeance.</i></p>
                        <p>New York, NY</p>
                        <p>Member since Apr 21, 2015</p>
                        <p>Active 15 hours ago</p>
                        <p>Time spent playing: 90 days 17 hours 11 minutes</p>
                    </div>
                </div>
                <hr />
                <div className='detail'>
                    <div className='battle-info'>
                        <div>
                            <p>372,329</p>
                            <p>Games</p>
                        </div>
                        <div>
                            <p>102,221</p>
                            <p>Rated</p>
                        </div>
                        <div>
                            <p>239,231</p>
                            <p>Wins</p>
                        </div>
                        <div>
                            <p>123,098</p>
                            <p>Losses</p>
                        </div>
                        <div>
                            <p>10,000</p>
                            <p>Draws</p>
                        </div>
                    </div>
                    <div className='battle-detail'>
                        <img src='/img/battle_example.png' alt='battle-example' />
                        <div className='battle-detail-info'>
                            <p>1/4+0 | ULTRABULLET | RATED</p>
                            <div className='playervsplayer'>
                                <div>
                                    <p>adolf hitler</p>
                                    <p>2601 + 3</p>
                                </div>
                                <h3>VS</h3>
                                <div>
                                    <p>Stalin</p>
                                    <p>2464 - 4</p>
                                </div>
                            </div>
                            <p>Nf3 e6 2. d3 d5 3.Nbd2 Be7 ... 65 moves</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile