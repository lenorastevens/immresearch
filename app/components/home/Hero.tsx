import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src="/IMM_Research_Banner.jpg"
        alt="Logo"
        width={790}
        height={278}
        className="ml-6"
      >
      </Image>
      <div>&nbsp;</div>
    </div>
  )
}