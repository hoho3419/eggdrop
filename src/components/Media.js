import React from 'react';
import Youtube from "react-youtube";
import styles from "./Media.module.css"
import {useMediaQuery} from "react-responsive";


const Media = () => {
    const isMiddleScreen = useMediaQuery({maxWidth: 975})
    const isSmallScreen = useMediaQuery({maxWidth: 760})
    const isLittleScreen = useMediaQuery({maxWidth: 576})
    return (
        <div className={styles['media']}>
            <h2>MENU</h2>
            <section>
                <div className={styles['youtube']}>
                    
                    <Youtube 
                    key={'6EbGVp_0vQw'}
                    videoId='6EbGVp_0vQw'
                    opts={{
                        width: (isLittleScreen ? '360' : isSmallScreen ? '560' : isMiddleScreen ? '760'  : '960'),
                        height: (isLittleScreen ? "200" : isSmallScreen ? "300" : isMiddleScreen ? '400'  : '500'),
                        autoplay: 1,
                        playerVars: {
                            autoplay: 0,
                            origin: window.location.href
                        }
                        }}
                    onEnd={(e)=>{e.target.stopVideo(0);}}    
                    />
                </div>
            </section>
        </div>
    );
};

export default Media;