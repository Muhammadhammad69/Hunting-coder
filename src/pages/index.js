import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/home.module.css"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-16 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex">
          <p className="left-0 top-0 flex flex-row w-96 sm:w-3/4 lg:w-1/2   items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit static  rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30 font-bold text-3xl">
            Hunting&nbsp;
            <code className="font-mono font-bold text-3xl">Coder</code>
          </p>
        </div>

        <div className="mt-4">
          <Image
            className="rounded-lg"
            src="/codingImage.jpg"
            alt="Next.js Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={`${styles.latestBlog}`}>
          <h1>A Blog for hunting coders</h1>
          <div className={styles.blogItems}>
            <h2>How to learn JavaScript in 2024?</h2>
            <h5>JavaScript is language used to design logic for the web.</h5>
          </div>
          <div className={styles.blogItems}>
            <h2>How to learn JavaScript in 2024?</h2>
            <h5>JavaScript is language used to design logic for the web.</h5>
          </div>
          <div className={styles.blogItems}>
            <h2>How to learn JavaScript in 2024?</h2>
            <h5>JavaScript is language used to design logic for the web.</h5>
          </div>
        </div>
      </main>
    </>
  );
}
