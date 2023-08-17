// import { useEffect, useState } from "react";
// import { Translation } from "./NavData.json";

// function TranslateEngToAr() {
//     const [language, setLanguage] = useState("english");
//     const [content, setContent] = useState({})

//     useEffect(() => {
//         if (language == "english") {
//             setContent(Translation.english)
//         } else if (language == "arabic") {
//             setContent(Translation.arabic)
//         }
//     })

//     return (
//         <div>
//             <select value={language} onChange={(e) => {setLanguage(e.target.value)}}>
//                 <option>english</option>
//                 <option>arabic</option>
//             </select>

//             <h2>{content.title}</h2>
//         </div>
//     );
// }

// export default TranslateEngToAr