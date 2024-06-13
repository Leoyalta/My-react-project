import OfficersProfile from "../../OfficersProfile/OficersProfile"
export default function OfficerList ({items}) {
    return (
    <ul>
    {items.map((item) => (
   <li key={item.id}>
    <OfficersProfile officer = {item}/>

   </li>
    ))}
  </ul>
    )
}