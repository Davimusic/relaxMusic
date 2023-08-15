import Image from 'next/image'



const Imagenes = ({ link, onClick, style, className }) => (
    <Image
      width={50}
      height={100}
      style={style}
      onClick={onClick}
      className={className}
      alt="The guitarist in the concert."
      src= {link}            
    />
  );

  export default Imagenes;
