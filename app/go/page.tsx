import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IMM Research | What Money?",
  };

export default function Go() {
  return (
    <div>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div>
            <h3><strong>What money are they talking about?&nbsp;</strong></h3>
            <p>&nbsp;</p>
            <p>{`So where does this money come from you ask? Most unclaimed moneys become abandoned as a result of a change of address (the owner has moved), or death of the owner (the estate was unaware of the money or the heirs could not be located).&nbsp;&nbsp; Notable examples are; forgotten security deposits, out-dated address on a CD or dividend check, a forgotten safe deposit box, checking account, or a deposit refund from a utility company that never reached you after you moved, etc.`}</p>
            <p>&nbsp;</p>
            <div>&nbsp;</div>
            <p><a href="do-i-really-need-these-guys/">Next&gt;&gt;&gt;Do I really need these guys?</a></p>
        </div>

        <div>&nbsp;</div>
        
        <div>

        </div>
        <div>&nbsp;</div>
        
        </div>

    </div>
  )
}