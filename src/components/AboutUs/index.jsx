import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './AboutUs.module.sass'

function AboutUs () {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <p className={styles.title} data-aos='fade-left'>
          О нас
        </p>
        <div className={styles.textContent}>
          <div className={styles.text}>
            <p data-aos='fade-left' data-aos-delay='100'>
              Мы создали платформу, которая позволяет вам не только проходить
              курсы, но и размещать свои собственные.
            </p>
            <p data-aos='fade-left' data-aos-delay='200'>
              Наша система предоставляет удобный интерфейс для создания и
              публикации курсов по самым различным темам. Вы можете делиться
              своими знаниями и опытом с другими пользователями, а они, в свою
              очередь, смогут найти и пройти ваши курсы.
            </p>
            <p data-aos='fade-left' data-aos-delay='300'>
              Наша платформа делает процесс размещения курсов простым и
              интуитивно понятным, обеспечивая качественное представление
              материала и удобный доступ для учеников.
            </p>
          </div>
          <img
            className={styles.img}
            src='/images/AboutUs.webp'
            alt='AboutUs'
            data-aos='fade-right'
            data-aos-delay='400'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
