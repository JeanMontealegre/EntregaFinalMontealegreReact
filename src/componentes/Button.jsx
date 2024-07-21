function Button({texto}){

    const hacerClick = () => {
        console.log("click")
    }
    
    return (
        <button className="bg-blue-500 hover:bg-blue-800 p-5 mx-2 text-stone-50 py-2 px-4 rounded text-2x1 font-bold mt-2" onClick={hacerClick} >
        {texto}
        </button>
    )
}

export default Button