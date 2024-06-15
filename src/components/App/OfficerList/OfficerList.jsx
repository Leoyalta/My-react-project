import OfficersProfile from "../../OfficersProfile/OficersProfile"
import css from "./OfficerList.module.css"
export default function OfficerList ({items}) {
    return (
    <ul className={css.list}>
    {items.map((item) => (
   <li key={item.id} className={css.itemCss}>
    <OfficersProfile officer = {item}/>

   </li>
    ))}
  </ul>
    )
}