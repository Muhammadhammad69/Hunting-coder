import Link from "next/link"
import { HeaderNav } from "../HomeComponents/HeaderNav"
import contactStyle from "../styles/contact.module.css"
const Contact = () => {
  return (
    <>
    <h1 className = {contactStyle.h1}>
      Contact page
    </h1>
    <p>This contact page for users</p>
    </>
  )
}

export default Contact