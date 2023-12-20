export default function Stats({ item }) {
    if (item.length === 0) return (
        <footer className="stats">
            <em>
                Start Adding Some Items 🚀 </em>
        </footer>
    )
    const numItem = item.length;
    const pack = item.filter(ito => ito.packed).length
    const percentage = Math.round((pack / numItem) * 100)
    console.log(percentage, numItem, pack)
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "You got everything! Ready to go ✈" : ` 💼 You have ${numItem} items on your list, and you already packed ${pack} (${percentage}%)`} </em>
        </footer>
    )
}