import Header from "@/conteiner/header"
import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from '../styles/authors.module.css';
import Link from "next/link";

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

const Authors : React.FC = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Header></Header>
            <h1 className={styles.h1}>Авторы</h1>
            <div className={styles.conteiner}>
                {
                    users.map((user: UserType) =>

                        <div className={styles.user_card} key={user.id}>
                            <Link className={styles.link} href={`/authors/${user.id}`}>
                                <h2 className={styles.h2}>
                                    {user.name}
                                </h2>
                            </Link>
                            <p className={styles.p}>
                                Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание направлений прогрессивного развития. Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании форм развития. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.
                            </p>
                        </div>

                    )
                }
            </div>
        </>
    )

}
export default Authors;

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserType[] = await response.json();
    return {
        props: { users }, 
    }
}