import {Bar,Line,Radar,Pie,Polar} from 'react-chartjs-2';
import {useState} from 'react';
function Charts(props){
    const {chart}=props;
    const [drill,setDrill]=useState(false);
    const chartData={
       labels:['2000','2005','2010','2015','2020'],
       datasets:[
           {
               label:'sales of shop A (sales in lakh) ',
               data:[2,4,3,6,7],
               backgroundColor:'orange'
           },
           {
            label:'sales of shop B (sales in lakh) ',
            data:[1,5,2,5,9,7],
            backgroundColor:'blue'
        }
       ]
    }
    const drillChart={
        labels:["jan-apr","may-aug","sep-dec"],
        datasets:[
            {
                label:'sales of months',
                data:[1,1.3,2],
                backgroundColor:"yellow"
            }
        ]
    }
    const option={
        title:{
            display:true,
            text:'Sales chart '
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:10,
                        stepSize:1
                    }
                }
            ]
        }
    }
    function showDrill(){
        setDrill((true));
    }
    console.log("chart");
    return (
        <div>
            <div id="back" onClick={props.back}>X</div>
            <div className="show-chart">
                {chart==="bar" &&<Bar data={chartData} options={option}/>}
                {chart==="line" &&<Line data={chartData} />}
                {chart==="area" &&<Polar data={chartData} />}
                {chart==="radar" &&<Radar data={chartData}/>}
                {chart==="pie" &&<Pie data={chartData} />}
                {chart==="drill" &&<div>
                     click on chart to show more info
                     {!drill &&<div style={{height:350}} onClick={showDrill}>
                        <Pie data={chartData} />
                    </div>}
                    {drill && <div>
                        <Pie data={drillChart} />
                        </div>}
                </div>}
            </div>
        </div>
    )
}
export default Charts;