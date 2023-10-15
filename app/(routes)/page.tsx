import { Billboard } from '@/components/Billboard';
import { Container } from '@/components/ui/Container';

export const revalidate = 0;

const HomePage = () => {
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard />
      </div>
    </Container>
  );
};

export default HomePage;
