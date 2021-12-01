import Chartist, { IChartistSeriesData } from "chartist";
import { useEffect, useRef, useState } from "react";

function Chart(props: { data: IChartistSeriesData[], referenceValue: number | undefined, interpolationFn: Function }) {
    const chart = useRef(null);
    const [properties, setProps] = useState(props);
    useEffect(() => { setProps(props); }, [props]);

    useEffect(() => {
        if (chart.current) {
            new Chartist.Line(chart.current, {
                series: properties.data,
            }, {
                axisX: {
                    type: Chartist.FixedScaleAxis,
                    divisor: 9,
                    labelInterpolationFnc: function (value: number) {
                        const date = new Date(value);
                        const day = date.toLocaleString('en-us', { weekday: 'short' })
                        const hours = date.getHours();
                        const minutes = date.getMinutes();
                        return `${day} ${hours}:${minutes}`
                    },
                },
                axisY: {
                    referenceValue: properties.referenceValue,
                    labelInterpolationFnc: properties.interpolationFn
                },
                lineSmooth: Chartist.Interpolation.simple({
                    fillHoles: true,
                }),
                
            });
        }
      }, [properties]);

    return (
        <div className="chart ct-minor-second" ref={chart}></div>
    )
};

export default Chart;