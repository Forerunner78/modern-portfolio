import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "./../img/photo_Alex_R.jpg";
import Link from "next/link";
import { componentStyles, colors } from "../styles/theme";
import { LinkArrow } from "../components/Icons";
import { useRouter } from "next/router";
import UnderlinedLink from "../components/UnderlinedLink";
import TransitionEffect from "../components/TransitionEffect";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Accueil — Portfolio d&apos;Alexandre Ribault | Dev Full Stack IA</title>
                <meta
                    name="description"
                    content="Alexandre Ribault — développeur Full Stack IA. Vibe coding avec Claude Code, 3 applications en production en 2026 : Dog Days, Runova, Commis."
                />
                <meta property="og:title" content="Accueil — Portfolio d'Alexandre Ribault | Dev Full Stack IA" />
                <meta
                    property="og:description"
                    content="Alexandre Ribault — développeur Full Stack IA. Vibe coding avec Claude Code, 3 applications en production en 2026 : Dog Days, Runova, Commis."
                />
            </Head>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="p-32 pt-0 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 flex justify-center lg:w-full lg:mb-8">
                            <div className="rounded-full overflow-hidden w-72 h-72 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 shadow-[0_8px_28px_-6px_rgba(0,0,0,0.2),0_18px_38px_-12px_rgba(0,0,0,0.15)] ring-1 ring-gray-100 dark:ring-neutral-800 bg-gradient-to-tr from-white to-gray-50 transform transition duration-300 hover:scale-105 hover:shadow-[0_10px_32px_-4px_rgba(0,0,0,0.25),0_22px_48px_-8px_rgba(0,0,0,0.2)]">
                                <Image
                                    src={profilePic}
                                    alt="Portrait d'Alexandre Ribault"
                                    className="object-cover object-top w-full h-full"
                                    priority
                                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                                />
                            </div>
                        </div>

                        <div className="w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center">
                            <h1 className="justify-center m-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-light">
                                Alexandre Ribault
                            </h1>
                            <p className={`${colors.text.base} justify-center text-justify m-auto mt-3 px-auto text-lg sm:text-xl max-w-2xl`}>
                                Développeur Full Stack IA. Je conçois et livre des applications web et mobiles en vibe coding avec Claude Code — 3 produits mis en production en 2026 : un jeu 4X multijoueur, une app Android de running gamifiée et un assistant pâtisserie IA.
                            </p>

                            <div className="mt-6 flex flex-row lg:flex-col items-center justify-center mx-auto space-x-4 lg:space-x-0 lg:space-y-3 lg:self-center">
                                <Link
                                    href="mailto:alex.ribault@gmail.com"
                                    className={componentStyles.button.contact}
                                    aria-label="Contacter Alexandre par email"
                                >
                                    Contact
                                </Link>

                                <Link
                                    href="/resume.pdf"
                                    target="_blank"
                                    className={`${colors.text.violet} h-12 inline-flex items-center justify-center px-6 rounded-md border border-violet-600 bg-transparent hover:bg-violet-50 transition duration-150 hover:scale-105 text-lg font-medium dark:border-violet-500`}
                                    download={true}
                                >
                                    CV <LinkArrow className={"w-5 inline-block ml-2"} />
                                </Link>

                                <UnderlinedLink href="/presentation" className={`${colors.text.violet} ml-4 lg:ml-0 lg:mt-3 text-sm`}>
                                    En savoir + →
                                </UnderlinedLink>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
