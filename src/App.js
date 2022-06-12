import logo from './logo.svg';
import './App.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const data =[
  [
    {title:"FREE",cost:0},
    [
      ["Single User",true],
      ["5GB Storage",true],
      ["Unlimited Public Projects",true],
      ["Community Access",true],
      ["Unlimited Private Projects",false],
      ["Dedicated Phone Support",false],
      ["Free Subdomain",false],
      ["Monthly Status Reports",false]
    ]
  ],
  [
    {title:"PLUS",cost:9},
    [
      ["5 Users",true],
      ["50GB Storage",true],
      ["Unlimited Public Projects",true],
      ["Community Access",true],
      ["Unlimited Private Projects",true],
      ["Dedicated Phone Support",true],
      ["Free Subdomain",true],
      ["Monthly Status Reports",false]
    ]
  ],
  [
    {title:"PRO",cost:49},
    [
      ["Unlimited Users",true],
      ["150GB Storage",true],
      ["Unlimited Public Projects",true],
      ["Community Access",true],
      ["Unlimited Private Projects",true],
      ["Dedicated Phone Support",true],
      ["Unlimited Free Subdomains",true],
      ["Monthly Status Reports",true]
    ]
  ]          
]

function App() {
  return (
    <div className ="section">
      <Container className = "mainEnclosure">
        {data.map((value, index)=>
              <PriceCart key={index} id={index} title = {value[0].title} cost = {value[0].cost} featuresArray = {value[1]} />
            )}
      </Container>
    </div>
    
  );
    
}


function PriceCart({id,title,cost,featuresArray}){
  return (
    <Card className={"priceCard" + id}>
      <CardContent>
        <h5 className ="title">{title}</h5>
        <div className="costWrapper">
          ${cost}
          {/* <div className ="cost">${cost}</div> */}
          <span className="month">/month</span>
        </div>
        <hr></hr>
        {featuresArray.map((value,index)=>{
          return (
            <div key={index} className={value[1]===true ? `check check${index}` : `close close${index}`} >
              <span className="icon">{value[1]===true ? <CheckIcon /> : <CloseIcon />}</span>&nbsp;
              <span>{value[0]}</span>
            </div>
          );
        })}
        <Button variant="contained">BUTTON</Button>
      </CardContent>
    </Card>
  );
}





export default App;
