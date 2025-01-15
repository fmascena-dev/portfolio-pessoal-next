import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
