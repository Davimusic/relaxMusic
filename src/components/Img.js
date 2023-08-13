import Image from 'next/image'



const Imagenes = ({ link, onClick }) => (
    <Image
      width={50}
      height={100}
      style={{ height:'50px'}}
      onClick={onClick}
      alt="The guitarist in the concert."
      src= {link}            
    />
  );

  export default Imagenes;
