import Chartist, { IChartistSeriesData } from "chartist";
import { useEffect, useRef } from "react";

function Chart(props: { data: IChartistSeriesData[], referenceValue: number | undefined, interpolationFn: Function }) {
    const chart = useRef(null);

    useEffect(() => {
        if (chart.current) {
            new Chartist.Line(chart.current, {
                series: props.data,
            }, {
                axisX: {
                    type: Chartist.FixedScaleAxis,
                    divisor: 9,
                    // labelInterpolationFnc: function (value) {
                    //     return moment(value).format('ddd HH:mm');
                    // }
                },
                axisY: {
                    referenceValue: props.referenceValue,
                    labelInterpolationFnc: props.interpolationFn
                },
                lineSmooth: Chartist.Interpolation.cardinal({
                    fillHoles: true,
                })
            });
        }
      }, []);

    return (
        <div className="chart ct-minor-second" ref={chart}></div>
    )
};

export default Chart;