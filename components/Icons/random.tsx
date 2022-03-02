//Get the button:
// When the user scrolls down 20px from the top of the document, show the button

//     //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//     const [visible, setVisible] = useState(false)

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300){
//       setVisible(true)
//     }
//     else if (scrolled <= 300){
//       setVisible(false)
//     }
//   };

//   const scrollToTop = () =>{
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//       /* you can also use 'auto' behaviour
//          in place of 'smooth' */
//     });
//   };

//   window.addEventListener('scroll', toggleVisible);
import React from 'react'

export default function random() {
    return <div>random</div>
}
