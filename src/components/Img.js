import Image from 'next/image'
import React, { useState } from "react";





const Imagenes = ({ link, onClick, style, className, id }) => (


    
        <Image
          width={50}
          height={100}
          style={style}
          onClick={onClick}
          className={className}
          id={id}
          alt="The guitarist in the concert."
          src= {link}            
        />
    
  );

  export default Imagenes;
