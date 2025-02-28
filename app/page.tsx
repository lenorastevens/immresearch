import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div>
          <h3 className=""><strong>Welcome</strong></h3>
          <p>If you are reading this is it likely because you have been contacted by one of our researchers.&nbsp; We believe that we have found money that belongs to you.&nbsp; Please take a moment to learn more about us and how we may be of service.</p>
          <div>&nbsp;</div>
          <h3><strong>Mission Statement</strong></h3>
			    <p>To provide meaningful and accurate information to our clients with the goal to recover as much money as possible in a timely manner.</p>
          <div>&nbsp;</div>
          <h3><strong>About IMM Research</strong></h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our researchers go through hundreds of case files every week in order to locate money being held by the government that belongs to private citizens.&nbsp; What we do is not unique, what is unique is where and how we do our research.&nbsp; It may surprise you to know that the government has taken upon itself to be the banker of the people when it comes to lost or misplaced financial assets.</p>
			    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We work strictly on&nbsp;a commission basis.&nbsp; If we do not help you recover money you will never owe us a penny.&nbsp; Our ground rules are this: 1) If we ask for money up front you should run away.&nbsp; 2) If we ever ask you for money before we help you get any you should run away. 3) If we ever ask you for any personal information, e.g. Social Security Number, you should run away. Deal?</p>
			    <div>&nbsp;</div>
          <h3><strong>Please make a selection below:</strong></h3>
			    <p>What Money?</p>
			    <p>I think I know about the money!!!</p>	
          <div>&nbsp;</div>	
        </div>

        <div>
          <Image src="/go.jpg" alt="Go sign link to what money page" width={157} height={215}></Image>
          <Image src="/stop.jpg" alt="Stop sign link to I know about the money page." width={160} height={215}></Image>
        </div>
      </div>
    </div>
  );
}
