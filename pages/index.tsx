import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.css'
//import   style from '../styles/style.module.css'
import Button from '../component/Button/Button'

export default function Home() {
  return (
  
    <div className={styles.container} >
       
       <Button pass="+" pass1="del"/>
    
    
     </div>
   
  )
}
