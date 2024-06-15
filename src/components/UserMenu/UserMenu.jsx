import css from "./UserMenu.module.css"
// console.log(css);
export default function UserMenu() {
    return <div className={css.menuBox}>
        <span>Hello</span>
        <button className={css.btn}>Log in</button>
    </div>
}