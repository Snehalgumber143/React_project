let name='Miles'

function checkevenorodd(num)
{
if(num%2 === 0)
{
return<div>even</div>
}
else
{
  return<div>odd</div>
}
}
function checkalphabet(char)
{
  switch(char)
  {
  case 'a':
  case 'e': 
  case 'i':
  case 'o':
  case 'u':
   return<div>vowel</div>; 
   default:
   return<div>consonent</div>
}
}

let num=4;
const users=[
  {name:'Peter' ,age:22},
  {name:'MJ' ,age:26},
  {name:'Miles' ,age:20}
]
function Jsx() {
  return (
    <div >
  <h2>Hello {name}</h2>
    
    <div>
      <h3>If else statement</h3>
      {
checkevenorodd(4)
      }
      {
      num%2===0?<div>Even number</div>:<div>odd number</div>
      }
      <h3>If statement</h3>
            {
      num%2>0 &&<div>odd number</div>
      }
      {
      num%2===0 &&<div>Even number</div>}
    </div>
 
    <h3>Loop</h3>
    {
      users.map((item,index)=>{return <div key={index}> {item.name}-{item.age}</div>})
    }
    <h3>switch</h3>
{
  checkalphabet('z')
}
    </div>
  )


}

export default Jsx;
export function greet(){
    return<h1>Hello world</h1>
}
