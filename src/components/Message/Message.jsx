import React, { useEffect, useRef, useState } from 'react'
import styles from './message.module.css'
import { Check, NoReact } from '../../images/inedex.js'
// import { ThreeDots } from '@bit/mhnpd.react-loader-spinner.three-dots';
import { ThreeDots } from 'react-loader-spinner'
import Time from '../Time/Time'
import { Wave, Play, Pausa } from '../../images/inedex.js'
import IconReaded from '../IconReaded/IconReaded'
import convertCurrentTime from '../../helpers/convertCurrentTime.js'
import Avator from '../Avator/Avator'




const MessageAudio = ({ audio }) => {
    const audioElem = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = '0.01';
        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false,
        );
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false,
        );
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false,
        );
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    }, []);

    return (

        <div className={styles.message__audio}>
            <audio className={styles.message__audio_s} src={audio} ref={audioElem} preload='auto' />
            <div className={styles.message__audio_progress}
                style={{ width: progress + '%' }}  >
                <div className={styles.message__audio_info}>
                    <div className={styles.message__audio_btn}>
                        <button className={styles.message__audio_button} onClick={togglePlay} >
                            {
                                isPlaying ?
                                    <img src={Pausa} alt='Pausa Svg' />
                                    :
                                    <img src={Play} alt='Play Svg' className={styles.message__audio_buttonPlay} />
                            }
                        </button>
                    </div>
                    <div className={styles.message__audio_wave}>
                        <img src={Wave} alt='' className={styles.message__audio_wave1} />
                    </div>
                    <span className={styles.message__audio_duration}>
                        {
                            convertCurrentTime(currentTime)
                        }
                    </span>
                </div>
            </div>
        </div>

    )
}



















function Message({ avator, user, text, isMe, isReaded, isTyping, attachments, audio }) {
    console.log("attachments: ", user)
    let date = new Date()
    // const [isPlaying, setIsPlaying] = useState(false)
    // const audioElem = useRef(null)
    // const [progress, setProgress] = useState(0);
    // const [currentTime, setCurrentTime] = useState(0);

    // ${attachments.length === 1 ? styles.message__image : ''} 
    // ${attachments && attachments.length === 1 ? styles.message__image : ''} 



    return (

        <div>

            <div className={`${isMe ? styles.message_Me : styles.message}
            ${isTyping ? styles.message_isTyping : ''} 
            ${attachments && attachments.length === 1 ? styles.message__image : ''} 
            ${audio ? styles.message_isAudio : ''}
           `} >

                <div className={styles.message__avator}>

                    {
                        <Avator user={avator} />
                    }
                </div>


                <div className={styles.message__content}>


                    {(audio || text || isTyping) && (
                        <div className={isMe ? styles.message__bubble_Me : styles.message__bubble}>
                            {text && <p className={styles.message__text}>{text}</p>}

                            {
                                isTyping && (<div className={styles.spinner}>
                                    <ThreeDots
                                        color={'#808080'}
                                        className={styles.spinner}

                                        height={20}

                                    />

                                </div>

                                )}

                            {audio && <MessageAudio audio={audio} />}



                            {
                                attachments && (
                                    <div className={styles.message__attachments}>
                                        {attachments.map(item => (
                                            <div className={styles.message__attachments_item}>
                                                <img src={item.url} alt={item.filename}
                                                    className={styles.message__attachments_img} />
                                            </div>
                                        ))}

                                    </div>

                                )}
                            <div className={styles.message__elements} >

                                <p className={styles.message__element_icon}>

                                    <IconReaded isMe={isMe} isReaded={isReaded} /> </p>
                                {/* {date && <p className={styles.message__date}><Time date={new Date()} /></p>} */}
                                <p className={styles.message__date}> 23:30</p>
                            </div>

                        </div>
                    )}

                </div>

            </div>

        </div >



    )
}


export default Message