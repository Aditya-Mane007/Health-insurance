"use client"
const Language = ({ value }: any) => {
  const { lang, setLang } = value
  const changeLanguage = (e: any) => {
    localStorage.setItem("Language", e.target.value)
    setLang(e.target.value)
  }
  return (
    <div className="w-20 h-auto mx-2 text-black flex flex-col">
      <select className="w-auto h-7" onChange={changeLanguage}>
        <option defaultValue={"Select Language"}>select Language</option>
        <option value="English">English</option>
        <option value="Marathi">मराठी</option>
        <option value="Hindi">हिंदी</option>
      </select>
    </div>
  )
}

export default Language
