import logo from "../../public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Aqui nasce o novo 
        <Image 
          src={logo}
          width={50}
          height={50}
          alt="Logo"
        />
      </p>
    </div>
  );
}
