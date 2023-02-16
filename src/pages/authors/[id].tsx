import Header from "@/conteiner/header";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styles from '@/styles/author.module.css';
import Head from "next/head";
type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

const Author = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <meta property="og:title" content="My new title" key="title" />
                <title>Test</title>
            </Head>
            <Header></Header>
            <div className={styles.conteiner}>
                <div className={styles.card}>
                    <h1 className={styles.h1}>Author - {user.name}</h1>
                    <ul className={styles.ul}>
                        <li>email: {user.email}</li>
                        <li>address: {user.address.city} {user.address.street}</li>
                        <li>phone: {user.phone}</li>
                        <li>website: {user.website}</li>
                    </ul>
                </div>
            </div>
        </>
    )

};
export default Author;

export const getServerSideProps: GetServerSideProps = async ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user: UserType = await response.json();
    return {
        props: { user },
    }
}