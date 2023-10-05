## CREATED NEXT APP 
 - npx create-next-app@latest 

## FILE BASED ROUTING 
 - Just CREATE folder (eg about) to create route and create page.js file inside folder 
 - In react we used to use react-router-dom package

## ADDING CSS
 - CREATE styles FOLDER inside app to add stylesheets 
 - ADD filename.module.css files in that folder for unique css for components, later we'll 
    import the file in that component
 - globals.css applies css to all files by default

## LAYOUT (CODE REUSE)
 - CREATE components FOLDER inside app and add components there(eg Header.js, Footer.js ,etc)
 - ADD the common components (like Header, Footer) which are in every page AT layout.js

## IMAGE AND LINKS
 - import Image from 'next/image'
   <Img src="" height={} width={} />
    -> automatic optimization, (src, width and height )important    / also need to just specify '/imgname.ext' in src attribute to take image from public folder
    -> IF USING IMAGE outside folders from fome domain , need to add that domain in next.config.js

 - import Link from 'next/link'
    <Link href=""></Link>     
    -> In react we need to use anchor after link but not here, it's like HTML link but doesnot 
        refresh page

## NEXT FONT COMPONENT
 - can use font by different ways from next/fonts
 - can use google fonts as well look at documentation for more

## NESTED AND DYNAMIC ROUTE
 - create FOLDER inside ROUTE folder for nesting route
 - create a SLUG for creating dynamic routing
   for this create FOLDER as [anyname], then create page.js inside folder
   -> then create link eg <Link href={`/movie/${maybeID}`}>GOTO</Link> inside movie ROUTE will render the dynamic route page
   ->NOW when you hit the link you are rendered to dynamic route page inside movie 
     there you'll get ID as __ Page({params}){ params.ID}

## APP/loading.js FILE
 - In next.js Just CREATE loading.js file in app directory and that file will be displayed when
   page is being loaded :) that easy
   (tips: goto loading.io site to get loading page design)

## APP/not-found.js FILE
- If user is requesting route not available. We can just create not-found.js in app dir. and 
   it will be shown



## USED SITES
 - shapedivider.app -> to add shape at bottom of page 
 - npm i react-icons -> for adding icons , then goto to react-icons site and import and add