import styles from './header.module.scss'
function Header () {
    return (
        <>
        <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerFlex}>
          <h1><a href="#">SneakMax</a></h1>
          <ul>
            <li><a href="">Каталог</a></li>
            <li><a href="">О нас</a></li>
            <li><a href="">Подбор товара</a></li>
            <li><a href="">Наша команда</a></li>
            <li><a href="">Доставка и оплата</a></li>
            <li><a href="">Контакты</a></li>
            <li><a href="">Корзина</a></li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <section className={styles.headerSect}>
        <div className={styles.container}>
          <span className={styles.headerSectionBg}>SneakMax</span>
          <div>
            <h2 className={styles.title}>
              Кроссовки известных брендов с доставкой по России и СНГ
            </h2>
            <p className={styles.samTitle}>
              Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse
              и многие другие по низким ценам
            </p>
            <button className={styles.primaryBtn}>Перейти к покупкам</button>
          </div>
        </div>
      </section>
    </main>
    </>
    )
}
export default Header
