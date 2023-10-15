interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className='mx-auto max-2-7xl'>{children}</div>;
};
