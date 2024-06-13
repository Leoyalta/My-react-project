export default function OfficersProfile({ officer: { name, rank, age, spec, status, skills } }) {


    return (
        <div>
<p>Name: {name}</p>
<p>Rank: {rank}</p>
<p>Age: {age}</p>
<p>Spec {spec}</p>
<p>Status {status === 'Active' ? 'Is active' : 'Is retaired'}</p>
<ul>{skills.map((skill, index) => (
<li key={index}>{skill}</li>
))}
</ul>
        </div>
    )

}