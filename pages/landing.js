import styles from "@/components/Landing.module.css"
import Interactivewoman from "@/components/Interactivewoman";
import Head from "next/head";
import WorldMap from "@/components/WorldMap";
import Landing1 from "@/components/Landing1";

export default function Landing() {

  const hello = "Hello, world!";

    return (
      <>
        <Head>
          <title>Landing</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />   
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/jsvectormap"></script>
          <script src="https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js"></script>  
        </Head>
        
        
  
        <Landing1></Landing1>
        

        {/* <div className = {styles.container}>    
        <Rotatingwoman></Rotatingwoman>
        </div>

        <WorldMap></WorldMap>

        <div className = {styles.container}> 
        <Interactivewoman message={hello}>
        </Interactivewoman>
        </div> */}


        
       
   
      
       
  
  
        
      </>
    );
  }