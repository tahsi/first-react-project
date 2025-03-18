import styles from './Header.module.css';

// interface HeaderProps {
//   title: string,
//   showMessage: () => void
// }
//
// const Header = ({title, showMessage}: HeaderProps) => {
//   return (
//     <div className={styles.header}>
//       <button onClick={showMessage}>Click me!</button>
//       {title}
//     </div>
//   )
// }

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.headerItemLeft}>Fisher</span>
      <span className={styles.headerItemRight}>fisher@gmail</span>
    </header>
  )
}

export default Header;
