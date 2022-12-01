import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link';

// サンプルページ　https://startbootstrap.com/previews/small-business

const Header = () => {
  return (
    <div>
      <div className={styles.header_wrapper}>
        <div className={styles.header_inner}>
          <h1>Company Name</h1>
          <div className={styles.header_menu_div}>
            <Link className={styles.header_menu_p} href='/'>トップページ</Link>
            <Link className={styles.header_menu_p} href='/components/projects/Projects'>事業内容</Link>
            <Link className={styles.header_menu_p} href='/components/achivements/Achivements'>実績</Link>
            <Link className={styles.header_menu_p} href='/components/company/Company'>会社概要</Link>
            <Link className={styles.header_menu_p} href='/components/information/Information'>お知らせ</Link>
            <Link className={styles.header_menu_p} href='/components/contact/Contact'>お問い合わせ</Link>
          </div>
        </div>
        <div className={styles.header_menu_div_hamberger}>
          🍔
          {/* <Link className={styles.header_menu_p} href='/'>トップページ</Link>
          <Link className={styles.header_menu_p} href='/components/projects/Projects'>事業内容</Link>
          <Link className={styles.header_menu_p} href='/components/achivements/Achivements'>実績</Link>
          <Link className={styles.header_menu_p} href='/components/company/Company'>会社概要</Link>
          <Link className={styles.header_menu_p} href='/components/information/Information'>お知らせ</Link>
          <Link className={styles.header_menu_p} href='/components/contact/Contact'>お問い合わせ</Link> */}
        </div>
      </div>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, vel.</h2>
    </div>
  )
}

export default Header