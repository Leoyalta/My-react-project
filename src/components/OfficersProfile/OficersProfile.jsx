import clsx from "clsx"

import css from "./OfficersProfile.module.css"

export default function OfficersProfile({ officer: { name, rank, age, spec, status, skills } }) {
    const isOnline = true;
    console.log(clsx("a", "b", "c", isOnline && "e", 51 > 10 && "y"));

    const statusClasses = clsx(
        css.text, 
        status === 'Active' ? css.isActive : css.isRetired 
    ) 
    
    return (
        <div className={css.container}>
<p className={css.text}>Name: {name}</p>
<p className={css.text}>Rank: {rank}</p>
<p className={css.text}>Age: {age}</p>
<p className={css.text}>Spec: {spec}</p>
<p className={statusClasses}>Status: {status === 'Active' ? 'Active' : 'Retired'}</p>
<ul>{skills.map((skill, index) => (
<li key={index}>{skill}</li>
))}
</ul>
        </div>
    )

} 