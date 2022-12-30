import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getContentService as getWrongContentService, getMap as getWrongMap } from '../factory/WrongFactory'
import { getContentService as getCorrectContentService, getMap as getCorrectMap } from '../factory/CorrectFactory'

export default function Page({ wrongRoutes, correctRoutes, wrongFactoryKeys, correctFactoryKeys }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>
          You visited this page, the contentServices are created here in both the <em>getWrongContentService</em> and <em>getCorrectContentService</em>.<br/>
        </p>
        <ul>
          <li>Wrong routes: {wrongRoutes.join(",")}</li>
          <li>Correct routes: {correctRoutes.join(",")}</li>
          <li>Wrong factory keys: {wrongFactoryKeys.join(",")}</li>
          <li>Correct factory keys: {correctFactoryKeys.join(",")}</li>
        </ul>
        <p>
          Going to <pre>/fill</pre> it will instanciate the routes. <a href="/fill">Here</a><br/>
          Going to <pre>/show</pre> it will just read the routes available without. <a href="/show">Here</a><br/>
          Going to <pre>/api/hello</pre> it will show the result in the API route. <a href="/api/hello">Here</a><br/>
          Going to <pre>/reset</pre> it will just reset factory. <a href="/reset">Here</a><br/>
        </p>
      </main>
    </>
  )
}

export function getServerSideProps({ req }) {
  if(req.url === "/reset") {
    getWrongMap().clear()
    getCorrectMap().clear()
  }
  // getContentService (WRONG)
  const wrongService = getWrongContentService("en-gb")
  // getContentService (CORRECT)
  const correctService = getCorrectContentService("en-gb")
  // Check if wel need to fill the props
  if(req.url === "/fill") {
    wrongService.fillRoutes()
    correctService.fillRoutes()
  }
  // Pass data to the page via props
  return { 
    props: { 
      wrongRoutes: wrongService.getRoutes(),
      correctRoutes: correctService.getRoutes(),
      wrongFactoryKeys: Array.from(getWrongMap().keys()),
      correctFactoryKeys: Array.from(getCorrectMap().keys())
    }
  }
}