import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Online 3D Viewer with Next.js
        </h1>

        <p className={styles.description}>
          Here's a short guide to how this works with React
        </p>
        <ul>
          <li>For the npm package to work, you need to provide packages like Rhino3D etc. in the public folder, as even with the npm package, these are needed for the viewer to function</li>
          <li>You must wait for the component to mount with useEffect before instantiating the viewer as the viewer calls window on initialisation which is only present in the browser, not node</li>
          <li>The package isn't well documented so there are two ways to figure out what functions can be used: read the source code or log the Viewer object and examine in the browser</li>
          <li>Instantiating the viewer object creates a canvas DOM element that we need to hold onto with React's useRef</li>
          <li>Another important thing is that you need to correctly clean up the instantiated EmbeddedViewer. You can't do this by just using something like `viewerRef = null` in the useEffect cleanup function as the DOM element will be cleaned up but not all the references to the model and the arrays that hold the geometry data. As such, we need to explicitly remove these. The code I have at the moment was haphazardly slapped together and likely contains redundancy, if you come up with a better solution, please let me know but it does correctly reduce the memory usage</li>
          <li>Even with the above code, the JS garbage collector is not the fastest so if you're running multiple instances of the viewer, be careful to stagger them if possible, as your users browsers may run out of memory, particularly on lower end devices</li>
          <li>Even if you somehow don't manage to run out of memory, you will likely run out of WebGL contexts (see issue ..) which is capped at anywhere between 8-12 depending on the device and the browser
          </li>
          <li>One of the most useful aspects of the browser is being able to grab an objects volume and surface area, which can be used for calculating 3D printing prices and so on. To do this, call the </li>
          <li>There are two ways you can load a file: by downloading a file from a URL or by loading it from a HTML file input</li>
          <li>If you need to pass a file around between components where the initial input may be lost, consider using Zustand</li>
          <li>Controlling the styling on the 3D viewer can be... imprecise when using Tailwind as a styling solution. Generally, I found that styling the parent div is the best way to do it</li>
        </ul>
        <p className={styles.description}>
          1. Here's an example of how we can get the 3D viewer to appear, click the button to get the viewer to appear
        </p>

        
      </main>

     
    </div>
  )
}