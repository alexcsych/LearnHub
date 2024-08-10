import React from 'react'
import styles from './Header.module.sass'

function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <img src='/images/Logo.png' alt='Logo' />
          <span>LearnHub</span>
        </div>
        <div className={styles.navigationBtn}>
          <div className={styles.activeBtn}>Главная</div>
          <div>Курсы</div>
          <div>Статьи</div>
          <div>Обьявления</div>
          <div>О нас</div>
        </div>
      </div>
      <div className={styles.headerBtn}>
        <div className={styles.themeBtn}>
          <img src='/images/Moon_alt_light.png' alt='Moon_alt_light' />
          <span>Тёмная</span>
        </div>
        <div className={styles.languageBtn}>
          <img src='/images/language.png' alt='language' />
          <span>RU</span>
        </div>
      </div>
      {/* <div className={styles.backgroundShapes}></div> */}
    </div>
  )
}

export default Header
