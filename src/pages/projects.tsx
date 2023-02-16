import Header from "@/conteiner/header";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from '@/styles/project.module.css';
import Head from "next/head";

type PhotoType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const Project: React.FC = ({ photos }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="My new title" key="title" />
                <title>Test</title>
            </Head>
            <Header></Header>
            <h1 className={styles.h1}>Проекты</h1>
            <div className={styles.conteiner}>
                {photos.map((photo: PhotoType) =>
                    <div className={styles.block} key={photo.id}>
                        <img src={photo.url} alt={photo.title} width={600} height={600}></img>
                        <p className={styles.p}>{photo.title}</p>
                    </div>
                )
                }
            </div>
        </>
    )

}

export default Project;

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const photos = await response.json();
    return {
        props: { photos },
    }
}