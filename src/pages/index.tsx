import Header from "@/conteiner/header";
import styles from "@/styles/index.module.css";
import Image from 'next/image';
import pic1 from '@/img/3_Image.jpg';
import pic2 from '@/img/f90555c3ec85099451ac4ba090dda9d5.jpg';

const Index = () => {
  return (
    <>
      <Header></Header>
      <div className={styles.conteiner}>
        <h1 className={styles.h1}>Главная страница</h1>
        <div className={styles.content}>
          <p className={styles.p}>Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт рамки и место обучения кадров позволяет оценить значение новых предложений.</p>
          <Image className={styles.pic} src={pic1} alt="cats"></Image>
          <Image className={styles.pic} src={pic2} alt="cats"></Image>
          <p className={styles.p}>Повседневная практика показывает, что новая модель организационной деятельности играет важную роль в формировании модели развития. Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий. Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение систем массового участия. Товарищи! консультация с широким активом требуют от нас анализа дальнейших направлений развития.</p>

        </div>
      </div>
    </>
  )

};
export default Index;