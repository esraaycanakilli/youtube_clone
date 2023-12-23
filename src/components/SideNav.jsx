import { categories } from "../utils/constants"
import { useContext } from "react"
import { YoutubeContext } from "../context/youtubeContext"

const SideNav = () => {
     const {selectedCategory,setSelectedCategory}= useContext(YoutubeContext)
    
  return (
    <nav className="flex flex-col p-4">
        {categories.map((item,i)=>(
            <div key={i} onClick={()=>setSelectedCategory(item)}>
            <div className={`"
            ${selectedCategory.name===item.name && 'bg-[#2d2d2d]'}
            felx gap-2 items-center p-2 py-4 text-lg cursor-pointer hover:bg-[#2d2d2d] rounded-md transi"`}>
                {item.icon}
                <span>{item.name}</span>
            </div>
            {/*eğer ki item ın divider i eşitse true ya hr bas*/}
            {item.divider && <hr />}
            </div>
        ))}
    </nav>
  )
}

export default SideNav