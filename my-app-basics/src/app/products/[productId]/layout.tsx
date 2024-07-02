function randomInt(count:number){
  return Math.floor(Math.random()*count)
  }

export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
     const random = randomInt(2)
    if(random===1){
        throw new Error("error loading product")
    }
    return (<>
      {children}
      <h2>this is a layout feature </h2>
    </>
    )
  }
  