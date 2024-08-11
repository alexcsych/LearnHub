import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Banner.module.sass'

function Banner () {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const typingSpeed = isDeleting ? 100 : 150
  const pauseBetweenWords = 1000

  useEffect(() => {
    AOS.init({ duration: 1000 })
    const words = ['C#', 'JavaScript', 'Java', 'C++', 'Node.js']
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length]
      const isFullWordTyped = charIndex === currentWord.length
      const isWordFullyDeleted = charIndex === 0

      if (isFullWordTyped && !isDeleting) {
        setTimeout(() => setIsDeleting(true), pauseBetweenWords)
      } else if (isWordFullyDeleted && isDeleting) {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      } else {
        const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1
        setCharIndex(nextCharIndex)
        setText(currentWord.substring(0, nextCharIndex))
      }
    }

    const typingTimeout = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(typingTimeout)
  }, [charIndex, isDeleting, loopNum, typingSpeed])

  return (
    <div className={styles.container}>
      <div className={styles.headerShapes}></div>
      {/* <video
        className={styles.video}
        src='/images/Banner.mp4'
        muted
        loop
        playsInline
        autoPlay
        poster='/images/Banner.png'
      >
        Sorry, your browser doesn't support embedded videos.
      </video> */}
      <div className={styles.content}>
        <div
          className={styles.textOverlay}
          data-aos='fade-right'
          data-aos-delay='200'
        >
          <p className={styles.text}>Выучите что-нибуть новое</p>
          <span>{text}</span>|
        </div>
        <img
          data-aos='fade-left'
          data-aos-delay='500'
          className={styles.img}
          src='/images/EduOnline-white.png'
          alt='EduOnline-white'
        />
      </div>

      <div className={styles.backgroundShapes}></div>
    </div>
  )
}

export default Banner
