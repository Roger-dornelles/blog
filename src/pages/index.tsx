import * as styles from '@/styles/styled';
import Head from '@/components/Header';
import BackgroundSvg from '@/components/BackgroundSvg';

export default function Home() {
  return (
    <>
      <Head />
      <styles.Container>
        <BackgroundSvg />

        <styles.H1>Bloguinho</styles.H1>

        <styles.ContainerParagraphs>
          <styles.Paragraph>Fique por dentro das noticias</styles.Paragraph>
          <styles.Paragraph>Tudo o que acontece no mundo,</styles.Paragraph>
          <styles.Paragraph>VOCÊ fica sabendo aqui.</styles.Paragraph>
        </styles.ContainerParagraphs>

        <styles.ContainerParagraphs marginTop={'2rem'}>
          <styles.Paragraph>Entre e saiba o que esta acontecendo no mundo.</styles.Paragraph>
          <styles.Paragraph>Clique e saiba o que estão comentando.</styles.Paragraph>
        </styles.ContainerParagraphs>
      </styles.Container>
    </>
  );
}
