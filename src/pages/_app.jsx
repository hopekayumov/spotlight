import {useEffect, useRef} from 'react'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import SEO from './next-seo.config'
import {DefaultSeo} from 'next-seo';

import '@/styles/tailwind.css'
import 'focus-visible'


import {MDXProvider} from '@mdx-js/react'
import Pre from '@/components/Pre'
import LinePNGDark from "../images/line-2.png"
import LinePNGLight from "../images/line-1.png"
import Image from "next/image";


const components = {

    pre: Pre,

}

function usePrevious(value) {
    let ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

export default function App({Component, pageProps, router}) {
    let previousPathname = usePrevious(router.pathname)

    return (
        <>
            <DefaultSeo {...SEO} />
            <MDXProvider components={components}>
                <div className="fixed inset-0 flex justify-center sm:px-8">
                    <div className="flex w-full max-w-7xl lg:px-8">
                        <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"/>
                    </div>
                </div>
                <Image src={LinePNGLight} alt="ss" className="absolute" style={{zIndex: -1}}/>
                {/*<div style={{*/}
                {/*    background: "linear-gradient(180deg, #09B6A2 0%, rgba(9, 182, 162, 0.00) 100%)",*/}
                {/*    width: "200px",*/}
                {/*    height: "200px",*/}
                {/*    position: "absolute",*/}
                {/*    opacity: "0.8",*/}
                {/*    filter: "blur(150px)",*/}
                {/*    zIndex: -1,*/}
                {/*}}></div>*/}

                <div className="relative scroll-smooth">
                    <Header/>
                    <main>
                        <Component previousPathname={previousPathname} {...pageProps} />
                    </main>
                    <Footer/>
                </div>
            </MDXProvider>
        </>
    )
}
